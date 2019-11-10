/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('GET EndPoint Locales', () => {
  it('should return a json with locales', async done => {
    const locals = await request(app)
      .get('/locales')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(locals.body.length).toBeGreaterThan(0);
    done();
  });

  it('should return a json with a specific locale', async done => {
    const search = 'São Paulo';
    const locale = await request(app)
      .get(`/locales/city?search=${search}`)
      .expect('Content-Type', /json/)
      .expect(200);
    expect(locale.body.length).toBe(1);
    done();
  });

  it('should return a json empty', async done => {
    const search = 'Varginha';
    const locale = await request(app)
      .get(`/locales/city?search=${search}`)
      .expect('Content-Type', /json/)
      .expect(200);
    expect(locale.body.length).toBe(0);
    done();
  });
});
