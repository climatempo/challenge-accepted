/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('GET EndPoint weather', () => {
  it('should return a json with weathers by locale id', async done => {
    const weathers = await request(app)
      .get('/weather/3477')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(weathers.body.length).toBeGreaterThan(0);
    done();
  });

  it('should return a json empty', async done => {
    const weathers = await request(app)
      .get('/weather/1')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(weathers.body.length).toBe(0);
    done();
  });
});
