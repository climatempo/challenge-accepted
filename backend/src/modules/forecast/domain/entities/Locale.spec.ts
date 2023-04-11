import { Latitude } from '../valueObject/Latitude';
import { LocaleId } from '../valueObject/LocaleId';
import { LocaleName } from '../valueObject/LocaleName';
import { Longitude } from '../valueObject/Longitude';
import { State } from '../valueObject/State';
import { Locale } from './Locale';

describe('Locale', () => {
  it('should create a valid locale', () => {
    const locale = new Locale({
      id: new LocaleId(3735),
      name: new LocaleName('Osasco'),
      state: new State('SP'),
      latitude: new Latitude(-23.532),
      longitude: new Longitude(-46.792),
    });

    expect(locale).toBeDefined();
    expect(locale).toBeInstanceOf(Locale);
    expect(locale.id.value).toBe(3735);
    expect(locale.name.value).toBe('Osasco');
    expect(locale.state.value).toBe('SP');
    expect(locale.latitude?.value).toBe(-23.532);
    expect(locale.longitude?.value).toBe(-46.792);
  });

  it('should create a valid locale ', () => {
    const locale = new Locale({
      id: new LocaleId(3735),
      name: new LocaleName('Osasco'),
      state: new State('SP'),
    });

    expect(locale).toBeDefined();
    expect(locale).toBeInstanceOf(Locale);
    expect(locale.id.value).toBe(3735);
    expect(locale.name.value).toBe('Osasco');
    expect(locale.state.value).toBe('SP');
  });
});
