import AppError from '../errors/AppError'
import Config from '../config/default'
import FileUtils from '../utils/fileUtils'
import FormatUtils from '../utils/formatUtils'

export default class LocaleService {
  /**
   * Busca os dados de todas as localidades
   */
  async getAllLocales() {
    const content = await FileUtils.getContent(Config.LOCALES_DIR)
  
    const locales = FileUtils.parseContent(content)

    return locales
  }

  /**
   * Busca dados de uma localidade
   * @param {String} name
   */
  async getLocaleByName(name) {
    const content = await FileUtils.getContent(Config.LOCALES_DIR)

    const locales = FileUtils.parseContent(content)

    const normalizedName = FormatUtils.normalizeText(name)

    if(!isNaN(normalizedName))
      throw new AppError('Nome inválido')

    const locale = locales.find(locale => {
      return FormatUtils.normalizeText(locale.name) === normalizedName
    })

    if(!locale)
      throw new AppError('Localidade não encontrada', 404)

    return locale
  }
}