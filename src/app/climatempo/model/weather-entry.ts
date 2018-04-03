import { Temperature } from './temperature';
import { Rain } from './rain';

export class WeatherEntry {
  date: string
  text: string
  temperature: Temperature
  rain: Rain
}
