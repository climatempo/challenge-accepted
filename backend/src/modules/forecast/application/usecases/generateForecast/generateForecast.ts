import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { randomUUID } from 'crypto';
import { CookieJar } from 'tough-cookie';
import { Forecast } from '../../../domain/entities/Forecast';
import { Locale } from '../../../domain/entities/Locale';
import { LocaleId } from '../../../domain/valueObject/LocaleId';
import { LocaleName } from '../../../domain/valueObject/LocaleName';
import { Period } from '../../../domain/valueObject/Period';
import { State } from '../../../domain/valueObject/State';
import { Weather } from '../../../domain/valueObject/Weather';
import { RawForecast } from './RawForecast';

type APISectionID = {
  sId: string;
  sId_sig: string;
};
type Token = string;

@Injectable()
export class GenerateForecast {
  private apiClient: AxiosInstance;

  constructor() {
    const jar = new CookieJar();
    this.apiClient = wrapper(axios.create({ jar }));
  }

  async execute(localeID: LocaleId): Promise<Forecast> {
    const credentials = await this.generateAccount();
    const token = await this.generateToken(credentials);
    await this.vinculeTokenToLocale(token, localeID);
    const rawForecast = await this.generateForecast(token, localeID);

    return this.parseRawToForecast(rawForecast);
  }

  parseRawToForecast(rawForecast: RawForecast): Forecast {
    const begin = new Date(rawForecast.data[0].date);

    const lastDateIndex = rawForecast.data.length - 1;
    const end = new Date(rawForecast.data[lastDateIndex].date);

    const period = new Period({ begin, end });

    const locale = new Locale({
      id: new LocaleId(rawForecast.id),
      name: new LocaleName(rawForecast.name),
      state: new State(rawForecast.state),
    });

    const weather = rawForecast.data.map((raw) => {
      const date = new Date(raw.date);
      const rain = {
        precipitation: raw.rain.precipitation,
        probability: raw.rain.probability,
      };
      const temperature = {
        min: raw.temperature.min,
        max: raw.temperature.max,
      };
      const text = raw.text_icon.text.pt;

      return new Weather({
        date,
        rain,
        temperature,
        text,
      });
    });

    const forecast = new Forecast({
      locale,
      period,
      weather,
    });

    return forecast;
  }

  async generateAccount(): Promise<APISectionID> {
    try {
      const payload = {
        email: `${randomUUID()}@email.com`,
        password: faker.internet.password(),
        name: faker.name.fullName(),
      };

      const { config } = await this.apiClient.post(
        `https://advisor.climatempo.com.br/register-user`,
        payload,
      );

      const cookies = await config?.jar?.getCookieString(
        `https://advisor.climatempo.com.br`,
      );

      const sId = cookies
        ?.match(new RegExp(`sId=([^;]+)`))?.[1]
        ?.replace('sId=', '');
      const sId_sig = cookies
        ?.match(new RegExp(`sId.sig=([^;]+)`))?.[1]
        ?.replace('sId.sig=', '');

      if (!sId || !sId_sig) {
        throw new Error('section token nao encontrado');
      }

      return { sId, sId_sig };
    } catch (error) {
      throw new Error('falha em criar uma conta');
    }
  }

  async generateToken({ sId, sId_sig }: APISectionID): Promise<Token> {
    try {
      const { data } = await this.apiClient.post(
        `https://advisor.climatempo.com.br/token`,
        {
          projectName: randomUUID(),
        },
        {
          headers: {
            Cookie: `sId=${sId}; sId.sig=${sId_sig}`,
          },
        },
      );
      return data.token;
    } catch (error) {
      throw new Error('falha ao gerar uma apiToken');
    }
  }

  async vinculeTokenToLocale(token: Token, localeID: LocaleId): Promise<void> {
    try {
      await this.apiClient.put(
        `http://apiadvisor.climatempo.com.br/api-manager/user-token/${token}/locales`,
        {
          localeId: [localeID.value],
        },
      );
    } catch (error) {
      throw new Error('falha ao vincular um token a uma localização');
    }
  }

  async generateForecast(
    token: Token,
    localeID: LocaleId,
  ): Promise<RawForecast> {
    try {
      const { data } = await this.apiClient.get<RawForecast>(
        `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${localeID.value}/days/15?token=${token}`,
      );
      return data;
    } catch (error) {
      throw new Error('falha ao gerar uma previsão');
    }
  }
}
