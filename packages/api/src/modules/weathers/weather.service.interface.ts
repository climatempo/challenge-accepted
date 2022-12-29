import { ListResponse } from '../../../types';
import { Locale } from '../../entities/Locale';
import { Weather } from '../../entities/Weather';
import { ListWeatherResponse, Period } from './types';
import { CreateWeatherDTO, ListWeatherDTO } from './weather.dto';

export interface WeatherResponse {
  period: Period;
  weather: Omit<Weather, 'id'>;
  locale: Locale;
}

export interface IWeatherService {
  create(data: CreateWeatherDTO): Promise<Weather>;
  listByLocale(query: ListWeatherDTO): Promise<ListWeatherResponse>;
}
