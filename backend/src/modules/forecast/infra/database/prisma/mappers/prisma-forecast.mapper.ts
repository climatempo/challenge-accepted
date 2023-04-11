import { Forecast } from './../../../../domain/entities/Forecast';
import { Locale } from './../../../../domain/entities/Locale';
import { Latitude } from './../../../../domain/valueObject/Latitude';
import { LocaleId } from './../../../../domain/valueObject/LocaleId';
import { LocaleName } from './../../../../domain/valueObject/LocaleName';
import { Longitude } from './../../../../domain/valueObject/Longitude';
import { Period } from './../../../../domain/valueObject/Period';
import { State, StateType } from './../../../../domain/valueObject/State';
import { Weather } from './../../../../domain/valueObject/Weather';

export class PrismaForecastMapper {
  static toPrisma(forecast: Forecast) {
    return {
      period_begin: forecast.period.begin,
      period_end: forecast.period.end,
      localeId: forecast.locale.id.value,
      weather: forecast.weather.map((weather) => ({
        date: weather.date,
        text: weather.text,
        temperature_min: weather.temperature.min,
        temperature_max: weather.temperature.max,
        rain_probability: weather.rain.probability,
        rain_precipitation: weather.rain.precipitation,
      })),
    };
  }

  static toDomain(raw: any): Forecast {
    const latitude = raw.locale?.latitude
      ? new Latitude(raw.locale.latitude)
      : undefined;
    const longitude = raw.locale?.longitude
      ? new Longitude(raw.locale.longitude)
      : undefined;

    const locale = new Locale({
      id: new LocaleId(raw.locale.id),
      name: new LocaleName(raw.locale.name),
      state: new State(raw.locale.state as StateType),
      latitude,
      longitude,
    });

    const period = new Period({
      begin: raw.period_begin,
      end: raw.period_end,
    });

    const weather = raw.weather.map((weather) => {
      return new Weather({
        date: new Date(weather.date),
        text: weather.text,
        temperature: {
          min: weather.temperature_min,
          max: weather.temperature_max,
        },
        rain: {
          probability: weather.rain_probability,
          precipitation: weather.rain_precipitation,
        },
      });
    });

    return new Forecast({
      locale,
      period,
      weather,
    });
  }
}
