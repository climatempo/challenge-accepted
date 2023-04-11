import { Forecast } from '../entities/Forecast';
import { LocaleId } from '../valueObject/LocaleId';

export abstract class ForecastRepository {
  abstract registerForecast(forecast: Forecast): Promise<void>;
  abstract getForecastByLocaleID(localeID: LocaleId): Promise<Forecast | null>;
}
