import WeatherService from '../services/WeatherService'

export default class WeatherController {
  async getAllWeathers(request, response) {
    const weatherService = new WeatherService()

    const weathers = await weatherService.getAllWeathers()

    return response.json(weathers)
  }

  async getWeatherByLocation(request, response) {
    const { location } = request.params

    const weatherService = new WeatherService()

    const weather = await weatherService.getWeatherByLocation(location)

    return response.json(weather)
  }
}