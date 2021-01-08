import 'regenerator-runtime/runtime';
import { locales, weather } from '../../../shared/constants';

let osascoCityId = 0;
let saopauloCityId = 0;

describe('FindWeatherByLocale', () => {
  beforeAll(() => {
    osascoCityId = locales[0].id;
    saopauloCityId = locales[1].id;
  });
  it('should be able to find the weather of Osasco city by ID', () => {
    const climate = weather.find(climate => climate.locale.id === osascoCityId);

    expect(climate).toBe(weather[0]);
  });

  it('should be able to find the weather of Sao Paulo city by ID', () => {
    const climate = weather.find(
      climate => climate.locale.id === saopauloCityId,
    );

    expect(climate).toBe(weather[1]);
  });

  it('should not be able to find the wather of a city that no exist', () => {
    const climate = weather.find(
      climate => climate.locale.id === Math.random(),
    );

    expect(climate).toBeUndefined();
  });
});
