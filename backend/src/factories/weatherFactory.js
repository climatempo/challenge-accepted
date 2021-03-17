const WeatherRepository = require('../repositories/weatherRepository')
const WeatherService = require('../services/weatherService')

const { join } = require('path')
const filename = join(__dirname, '../database', 'weather.json')

const weatherInstance = () => {
  const weatherRepository = new WeatherRepository({
    file: filename
  })
  const weatherService = new WeatherService({
    weatherRepository
  })

  return weatherService
}

module.exports = { weatherInstance }
