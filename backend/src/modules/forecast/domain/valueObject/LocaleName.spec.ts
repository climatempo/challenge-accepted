import { LocaleName } from './LocaleName';

describe('LocaleName', () => {
  it('should create a valid Locale name values', () => {
    const name = new LocaleName('Sao paulo');

    expect(name).toBeDefined();
    expect(name).toBeInstanceOf(LocaleName);
    expect(name.value).toBe('Sao paulo');
  });
});
