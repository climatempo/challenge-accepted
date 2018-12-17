const weatherData = require('../data/weather.json')

const get = (idCity) => {
  return weatherData.find(item => item.locale.id === idCity)
}

module.exports = {
  get
}