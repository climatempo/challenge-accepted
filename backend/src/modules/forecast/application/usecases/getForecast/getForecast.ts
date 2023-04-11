import { HttpException, Injectable } from '@nestjs/common';
import { Forecast } from '../../../domain/entities/Forecast';
import { ForecastRepository } from '../../../domain/repositories/Forecast.repository';
import { LocaleRepository } from '../../../domain/repositories/Locale.repository';
import { LocaleId } from '../../../domain/valueObject/LocaleId';
import { GenerateForecast } from './../generateForecast/generateForecast';

interface GetForecastDTO {
  localeID: number;
}

@Injectable()
export class GetForecast {
  constructor(
    private readonly forecastRepository: ForecastRepository,
    private readonly localeRepository: LocaleRepository,
    private readonly generateForecast: GenerateForecast,
  ) {}

  async execute(dto: GetForecastDTO): Promise<Forecast> {
    const localeID = new LocaleId(dto.localeID);

    const localeExists = await this.localeRepository.getLocaleById(localeID);

    if (!localeExists) {
      throw new HttpException('localidade não encontrada', 404);
    }

    let forecast = await this.forecastRepository.getForecastByLocaleID(
      localeID,
    );

    if (!forecast || forecast.isOutdated) {
      const newForecast = await this.generateForecast.execute(localeID);
      await this.forecastRepository.registerForecast(newForecast);
      forecast = newForecast;
    }

    if (!forecast) {
      throw new Error('nao foi possível gerar uma previsão');
    }

    return forecast;
  }
}
