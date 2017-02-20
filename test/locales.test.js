const expect = require('chai').expect;
const fs = require('fs');

const Locale = require('../lib/locales.js');

describe('The locale module', () => {
  it('should return the right weather to São Paulo', done => {
    fs.readFile('./base/weather.json', (err, data) => {
      const locale = 'São Paulo';

      const findLocale = new Locale();
      const result = findLocale.findWeather(locale, data);

      expect(result[0].temperature).to.eql({ min: 19, max: 27 });
      done();
    });
  });

  it('should return the right weather to Osasco', done => {
    fs.readFile('./base/weather.json', (err, data) => {
      const locale = 'Osasco';

      const findLocale = new Locale();
      const result = findLocale.findWeather(locale, data);

      expect(result[0].temperature).to.eql({ min: 20, max: 28 });
      done();
    });
  });

  it('should return Location not found if there is no locality', done => {
    fs.readFile('./base/weather.json', (err, data) => {
      const locale = 'Brasília';

      const findLocale = new Locale();
      const result = findLocale.findWeather(locale, data);

      expect(result).to.eql('Location not found');
      done();
    });
  });

  it('should return a error if there is no data', done => {
    fs.readFile('./base/weather.jso', (err, data) => {
      const locale = 'Brasília';

      const findLocale = new Locale();
      const result = findLocale.findWeather(locale, data);

      expect(result).to.be.an('error');
      done();
    });
  });

});
