import { LocaleId } from '../valueObject/LocaleId';
import { LocaleName } from '../valueObject/LocaleName';
import { Period } from '../valueObject/Period';
import { State } from '../valueObject/State';
import { Weather } from '../valueObject/Weather';
import { Forecast } from './Forecast';
import { Locale } from './Locale';

describe('Forecast', () => {
  it('should create a valid forecast', () => {
    const forecast = new Forecast({
      locale: new Locale({
        id: new LocaleId(1234),
        name: new LocaleName('Alfenas'),
        state: new State('MG'),
      }),
      period: new Period({ begin: new Date(), end: new Date() }),
      weather: [
        new Weather({
          date: new Date(),
          rain: { precipitation: 50, probability: 50 },
          temperature: { min: 15, max: 20 },
          text: 'sol e chuva',
        }),
      ],
    });

    expect(forecast).toBeDefined();
    expect(forecast).toBeInstanceOf(Forecast);
    expect(forecast.locale).toBeInstanceOf(Locale);
    expect(forecast.period).toBeInstanceOf(Period);
    expect(forecast.weather).toBeInstanceOf(Array<Weather>);
  });
});
