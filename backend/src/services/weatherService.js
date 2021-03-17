class WeatherService {
  constructor({ weatherRepository }) {
    this.weatherRepository = weatherRepository
  }

  async find(itemId) {
    return this.weatherRepository.find(itemId)
  }
}

module.exports = WeatherService