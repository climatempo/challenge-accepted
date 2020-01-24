const request = require('supertest');
const app = require('../../../src/index');

describe('Weather Controller', () => {
  describe('GET /weather', () => {
    describe('HTTP Status Code', () => {
      it('should respond 200 OK with valid city', done => {
        request(app)
          .get('/weather?city=Osasco')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      it('should respond 400 Bad Request with empty city', done => {
        request(app)
          .get('/weather?city=')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done);
      });

      it('should respond 400 Bad Request without city param', done => {
        request(app)
          .get('/weather')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done);
      });

      it('should respond 404 when city is not found', done => {
        request(app)
          .get('/weather?city=Joinville')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done);
      });
    });

    describe('HTTP Response', () => {
      it('should return weather data for valid city', done => {
        request(app)
          .get('/weather?city=Osasco')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            if (err) {
              done.fail(err);
            }

            expect(res.body).toBeDefined();

            expect(res.body).toBeInstanceOf(Object);
            expect(res.body.period).toBeDefined();
            expect(res.body.locale).toBeDefined();
            expect(res.body.weather).toBeDefined();
            expect(res.body.weather.length).toBeGreaterThan(0);

            done();
          });
      });

      it('should return error object when city is not found', done => {
        request(app)
          .get('/weather?city=Joinville')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            if (err) {
              done.fail(err);
            }

            expect(res.body).toBeDefined();

            expect(res.body.status).toEqual(404);
            expect(res.body.message).toEqual('City not found');

            done();
          });
      });
    });
  });
});
