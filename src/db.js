const fs = require('fs')
const jsonWeather = JSON.parse(fs.readFileSync('base/weather.json'))
const jsonLocales = JSON.parse(fs.readFileSync('base/locales.json'))

module.exports = {
  getWeather (city) {
    const locale = jsonLocales.find(locale => locale.name.match(city))
    if (locale) {
      const dataCity = []
      dataCity.push(jsonWeather.find(weather => weather.locale.id === locale.id))
      return dataCity
    }
    return []
  }
}
