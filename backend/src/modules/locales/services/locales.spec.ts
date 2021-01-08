import 'regenerator-runtime/runtime';
import { locales } from '../../../shared/constants';
import LocaleService from './LocaleService';

let osascoCityId = 0;
let saopauloCityId = 0;

describe('FindLocales', () => {
  beforeAll(() => {
    osascoCityId = locales[0].id;
    saopauloCityId = locales[1].id;
  });
  it('should be able to find all cities', async () => {
    const cities = await LocaleService.execute();

    expect(cities).toEqual(locales);
  });

  it('should be able to find Osasco city by ID', () => {
    const city = locales.find(locale => locale.id === osascoCityId);

    expect(city).toBe(locales[0]);
  });

  it('should be able to find Sao Paulo city by ID', () => {
    const city = locales.find(locale => locale.id === saopauloCityId);

    expect(city).toBe(locales[1]);
  });

  it('should not be able to find a city that no exist', () => {
    const city = locales.find(locale => locale.id === Math.random());

    expect(city).toBeUndefined();
  });
});
