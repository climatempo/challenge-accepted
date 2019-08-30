import '@babel/polyfill';

import test from '../../test';

const baseUrl = '/api/v1/regions';

const rsTest = (url) => {
  return test().get(url)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200);
};

describe('Region Search', () => {
  it('Should returns array with data', () => {
    return rsTest(`${baseUrl}?name=`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('locales');
        const { locales } = body;
        expect(locales).toBeDefined();
        expect(Array.isArray(locales)).toBeTruthy();
        expect(locales).not.toHaveLength(0);
        expect(locales[0]).toHaveProperty('id');
        expect(locales[0]).toHaveProperty('name');
      });
  });

  it('Should returns empty array if name not finded', () => {
    return rsTest(`${baseUrl}?name=foo`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('locales');
        const { locales } = body;
        expect(locales).toBeDefined();
        expect(Array.isArray(locales)).toBeTruthy();
        expect(locales).toHaveLength(0);
      });
  });

  it('Should returns empty array if not exists name param', () => {
    return rsTest(`${baseUrl}`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('locales');
        const { locales } = body;
        expect(locales).toBeDefined();
        expect(Array.isArray(locales)).toBeTruthy();
        expect(locales).toHaveLength(0);
      });
  });

  it('Should returns array containing fetched name', () => {
    return rsTest(`${baseUrl}?name=São Paulo`)
      .expect(({ body }) => {
        expect(body).toHaveProperty('locales');
        const { locales } = body;
        expect(locales).toBeDefined();
        expect(Array.isArray(locales)).toBeTruthy();
        expect(locales).toHaveLength(1);
        expect(locales[0]).toHaveProperty('name', 'São Paulo');
      });
  });
});
