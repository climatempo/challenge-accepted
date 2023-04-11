import { LocaleId } from './LocaleId';

describe('LocaleId', () => {
  it('should create a valid locale id', () => {
    const localeId = new LocaleId(3735);

    expect(localeId).toBeDefined();
    expect(localeId).toBeInstanceOf(LocaleId);
    expect(localeId.value).toBe(3735);
  });
});
