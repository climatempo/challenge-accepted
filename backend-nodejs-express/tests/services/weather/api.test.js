import '@babel/polyfill';

import { test } from '../../test';

const baseUrl = '/api/v1/weather';

const id = 3477; // TODO: fragile!

describe('Weather Service', () => {
  it(`Should returns data of id: ${id}`, () => {
    return test(`${baseUrl}?localeId=${id}`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('weather');
        const { period, locale, weather } = body.weather;
        expect(period).toHaveProperty('begin');
        expect(period).toHaveProperty('end');
        expect(locale).toHaveProperty('id');
        expect(locale).toHaveProperty('name');
        expect(locale).toHaveProperty('state');
        expect(locale).toHaveProperty('latitude');
        expect(locale).toHaveProperty('longitude');
        expect(Array.isArray(weather)).toBeTruthy();
        expect(weather).not.toHaveLength(0);
        expect(weather[0]).toHaveProperty('date');
        expect(weather[0]).toHaveProperty('text');
        expect(weather[0]).toHaveProperty('temperature');
        expect(weather[0]).toHaveProperty('rain');
        const { temperature, rain } = weather[0];
        expect(temperature).toHaveProperty('min');
        expect(temperature).toHaveProperty('max');
        expect(rain).toHaveProperty('probability');
        expect(rain).toHaveProperty('precipitation');
      });
  });

  it('Should returns null data without locale id', () => {
    return test(`${baseUrl}?localeId=`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('weather', null);
      });
  });

  it('Should returns null data if param localeId not exists', () => {
    return test(baseUrl)
      .expect(({ body }) => {
        expect(body).toHaveProperty('weather', null);
      });
  });
});
