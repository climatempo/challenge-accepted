import '@babel/polyfill';

import { test } from '../../test';

const baseUrl = '/api/v1/regions';

describe('Region Search Service', () => {
  it('Should returns array containing fetched name', () => {
    return test(`${baseUrl}?name=São Paulo`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('locales');
        const { locales } = body;
        expect(locales).toBeDefined();
        expect(Array.isArray(locales)).toBeTruthy();
        expect(locales).toHaveLength(1);
        expect(locales[0]).toHaveProperty('id');
        expect(locales[0]).toHaveProperty('name');
        expect(locales[0]).toHaveProperty('name', 'São Paulo');
      });
  });

  it('Should returns empty array if name not finded', () => {
    return test(`${baseUrl}?name=foo`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('locales');
        const { locales } = body;
        expect(locales).toBeDefined();
        expect(Array.isArray(locales)).toBeTruthy();
        expect(locales).toHaveLength(0);
      });
  });

  it('Should returns empty array if not exists name param', () => {
    return test(`${baseUrl}`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('locales');
        const { locales } = body;
        expect(locales).toBeDefined();
        expect(Array.isArray(locales)).toBeTruthy();
        expect(locales).toHaveLength(0);
      });
  });
});
