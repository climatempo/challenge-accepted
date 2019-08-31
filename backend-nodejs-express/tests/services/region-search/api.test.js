import '@babel/polyfill';

import { test } from '../../test';

const baseUrl = '/api/v1/regions';

describe('Region Search Service', () => {
  it('Should returns array containing fetched name', () => {
    return test(`${baseUrl}?name=São Paulo`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('regions');
        const { regions } = body;
        expect(regions).toBeDefined();
        expect(Array.isArray(regions)).toBeTruthy();
        expect(regions).toHaveLength(1);
        expect(regions[0]).toHaveProperty('id');
        expect(regions[0]).toHaveProperty('name');
        expect(regions[0]).toHaveProperty('name', 'São Paulo');
      });
  });

  it('Should returns empty array if name not finded', () => {
    return test(`${baseUrl}?name=foo`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('regions');
        const { regions } = body;
        expect(regions).toBeDefined();
        expect(Array.isArray(regions)).toBeTruthy();
        expect(regions).toHaveLength(0);
      });
  });

  it('Should returns empty array if not exists name param', () => {
    return test(`${baseUrl}`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('regions');
        const { regions } = body;
        expect(regions).toBeDefined();
        expect(Array.isArray(regions)).toBeTruthy();
        expect(regions).toHaveLength(0);
      });
  });
});
