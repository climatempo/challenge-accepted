import { ListParams } from '../../../types';
import { Weather } from '../../entities/Weather';
import { Weather as WeatherRepository } from '@prisma/client';

export interface ListWeatherParams extends ListParams<Weather> {
  params?: Omit<Partial<WeatherRepository>, 'date'> & {
    date?: Date | { gte?: Date; lte?: Date };
  };
}

export interface IWeatherRepository {
  create(payload: Weather): Promise<WeatherRepository>;
  list(payload: ListWeatherParams): Promise<WeatherRepository[]>;
  count(params: Partial<Weather>): Promise<number>;
}
