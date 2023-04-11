import { Forecast } from 'src/modules/forecast/domain/entities/Forecast';
import { LocaleViewModel } from './Locale.viewModel';

export class ForecastViewModel {
  static toHTTP(forecast: Forecast) {
    return {
      period: {
        begin: forecast.period.begin,
        end: forecast.period.end,
      },
      locale: LocaleViewModel.toHTTP(forecast.locale),
      weather: forecast.weather.map((weather) => {
        return {
          date: weather.date,
          text: weather.text,
          temperature: {
            min: weather.temperature.min,
            max: weather.temperature.max,
          },
          rain: {
            probability: weather.rain.probability,
            precipitation: weather.rain.precipitation,
          },
        };
      }),
    };
  }
}
