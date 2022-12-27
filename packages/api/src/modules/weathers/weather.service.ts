import { Injectable, Inject } from '@nestjs/common';
import { ListResponse } from '../../../types';
import { Weather } from '../../entities/Weather';
import { ILocalesRepository } from '../../repositories/locales/locales.repository.interface';
import { IWeatherRepository } from '../../repositories/weather/weather.repository.interface';
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
    ...paramsDTO
  }: ListWeatherDTO): Promise<ListResponse<Weather>> {
    const foundLocale = await this.localesRepository.find(locale);

    if (!foundLocale) throw new Error(`Locale ${locale} does not exist`);

    const params = { ...paramsDTO, localeId: foundLocale.id };

    const promiseWeather = () =>
      this.weatherRepository.list({
        page,
        orderBy,
        params,
        pageLimit: pageSize,
      });

    const promiseCount = () => this.weatherRepository.count(params);

    const [list, count] = await Promise.all([promiseWeather(), promiseCount()]);
    return { list, count, page, pageSize };
  }
}
