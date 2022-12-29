import { Injectable, Inject } from '@nestjs/common';
import { ListResponse } from '../../../types';
import { Weather } from '../../entities/Weather';
import { ILocalesRepository } from '../../repositories/locales/locales.repository.interface';
import { IWeatherRepository } from '../../repositories/weather/weather.repository.interface';
import { ListWeatherResponse } from './types';
import { CreateWeatherDTO, ListWeatherDTO } from './weather.dto';
import { IWeatherService } from './weather.service.interface';

@Injectable()
export class weatherService implements IWeatherService {
  constructor(
    @Inject('IWeatherRepository')
    private readonly weatherRepository: IWeatherRepository,
    @Inject('ILocalesRepository')
    private readonly localesRepository: ILocalesRepository,
  ) {}

  async create({ locale, ...data }: CreateWeatherDTO): Promise<Weather> {
    const foundLocale = await this.localesRepository.find(locale);

    if (!foundLocale) throw new Error(`Locale ${locale} does not exist`);

    console.log({ foundLocale });

    const weather = new Weather({ ...data, localeId: foundLocale.id });
    return await this.weatherRepository.create(weather);
  }

  async listByLocale({
    orderBy,
    page,
    pageSize,
    locale,
    begins,
    ends,
    ...params
  }: ListWeatherDTO): Promise<ListWeatherResponse> {
    const foundLocale = await this.localesRepository.find(locale);

    if (!foundLocale) throw new Error(`Locale ${locale} does not exist`);

    const weather = await this.weatherRepository.list({
      page,
      orderBy,
      params: {
        ...params,
        localeId: foundLocale.id,
        date: { gte: begins, lte: ends },
      },
      pageLimit: pageSize,
    });

    return { locale: foundLocale, period: { begins, ends }, weather };
  }
}
