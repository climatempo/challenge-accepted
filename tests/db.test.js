/* global it, describe */
const expect = require('chai').expect
const db = require('../public/resources/js/db.js')

describe('db', function () {
  describe('Smoke tests', function () {
    it('should exist the db lib', function () {
      expect(db).to.exist
    })

    it('should exist the method `getWeather`', function () {
      expect(db.getWeather).to.exist
      expect(db.getWeather).to.be.a('function')
    })
  })

  describe('getWeather', function () {
    it('should return an array', function () {
      expect(db.getWeather('Osasco')).to.be.a('array')
    })

    it('should return (locale.name = Osasco) when `getWeather("Osasco")`', function () {
      expect(db.getWeather('Osasco')[0].locale.name).to.be.equal('Osasco')
      expect(db.getWeather('Osasco')[0].locale.state).to.be.equal('SP')
    })

    it('should return (locale.name = São Paulo) when `getWeather("São Paulo")`', function () {
      expect(db.getWeather('São Paulo')[0].locale.name).to.be.equal('São Paulo')
    })

    it('should return [] when city not found', function () {
      expect(db.getWeather('aaa')).to.be.a('array')
    })
  })
})
