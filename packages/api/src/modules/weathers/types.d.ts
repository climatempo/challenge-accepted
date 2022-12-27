import { Locale } from '../../entities/Locale';
import { Weather } from '../../entities/Weather';

export interface Period {
  begins?: string;
  ends?: string;
}

interface Temperature {
  min: number;
  max: number;
}

interface Rain {
  probability: number;
  precipitation: number;
}

interface ListWeatherResponse {
  period: Period;
  locale: Locale;
  weather: Weather;
}
