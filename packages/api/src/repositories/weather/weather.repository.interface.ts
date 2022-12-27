import { ListParams } from '../../../types';
import { Weather } from '../../entities/Weather';
import { Weather as WeatherRepository } from '@prisma/client';

export interface ListWeatherParams extends ListParams<Weather> {
  params?: Partial<WeatherRepository>;
}

export interface IWeatherRepository {
  create(payload: Weather): Promise<WeatherRepository>;
  list(payload: ListWeatherParams): Promise<WeatherRepository[]>;
  count(params: Partial<Weather>): Promise<number>;
}
