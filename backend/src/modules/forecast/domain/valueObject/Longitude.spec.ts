import { Longitude } from './Longitude';

describe('Longitude', () => {
  it('should create a valid longitude values', () => {
    const longitude = new Longitude(10.0);

    expect(longitude).toBeDefined();
    expect(longitude).toBeInstanceOf(Longitude);
    expect(longitude.value).toBe(10.0);
  });
});
