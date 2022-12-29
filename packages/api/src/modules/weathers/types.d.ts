import { Locale } from '../../entities/Locale';
import { Weather } from '../../entities/Weather';

export interface Period {
  begins?: Date;
  ends?: Date;
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
  weather: Weather[];
}
