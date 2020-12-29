import AppError from '../errors/AppError'
import Config from '../config/default'
import FileUtils from '../utils/fileUtils'
import FormatUtils from '../utils/formatUtils'

export default class WeatherService {
  /**
   * Buscar todos os dados de clima
   */
  async getAllWeathers() {
    const content = await FileUtils.getContent(Config.WEATHER_DIR)
  
    const weathers = FileUtils.parseContent(content)

    return weathers
  }

  /**
   * Buscar dados de clima de uma localidade
   * @param {String} location
   */
  async getWeatherByLocation(location) {
    const content = await FileUtils.getContent(Config.WEATHER_DIR)

    const weathers = FileUtils.parseContent(content)

    const normalizedLocation = FormatUtils.normalizeText(location)

    if(!isNaN(normalizedLocation))
      throw new AppError('Localidade inválida')

    const weather = weathers.find(weather => {
      return FormatUtils.normalizeText(weather.locale.name) === normalizedLocation
    })

    if(!weather)
      throw new AppError('Dados de clima não encontrados para esta localidade')

    return weather
  }
}