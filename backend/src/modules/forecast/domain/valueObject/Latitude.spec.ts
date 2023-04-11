import { Latitude } from './Latitude';

describe('Latitude', () => {
  it('should accept valid latitude values', () => {
    const latitude = new Latitude(10);

    expect(latitude).toBeDefined();
    expect(latitude).toBeInstanceOf(Latitude);
    expect(latitude.value).toBe(10);
  });

  it('should throw an error for invalid latitude values', () => {
    const createInvalidLatutude = () => new Latitude(100);
    expect(createInvalidLatutude).toThrow();
  });
});
