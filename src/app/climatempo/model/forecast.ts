import { Locale } from './locale';
import { Period } from './period';
import { WeatherEntry } from './weather-entry';

export class Forecast {
  period: Period
  locale: Locale
  weather: WeatherEntry[]
}
