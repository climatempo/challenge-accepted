import { Weather } from './Weather';

describe('Weather', () => {
  it('should create a valid weather values', () => {
    const date = new Date();
    const rain = { precipitation: 50, probability: 50 };
    const temperature = { min: 15, max: 20 };
    const text = 'sol e chuva';

    const weather = new Weather({
      date,
      rain,
      temperature,
      text,
    });

    expect(weather).toBeDefined();
    expect(weather).toBeInstanceOf(Weather);
    expect(weather.date).toBe(date);
    expect(weather.rain).toBe(rain);
    expect(weather.temperature).toBe(temperature);
    expect(weather.text).toBe(text);
  });
});
