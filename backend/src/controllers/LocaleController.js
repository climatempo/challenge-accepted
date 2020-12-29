import LocaleService from '../services/LocaleService'

export default class LocaleController {
  async getAllLocales(request, response) {
    const localeService = new LocaleService()

    const locales = await localeService.getAllLocales()

    return response.json(locales)
  }

  async getLocaleByName(request, response) {
    const { name } = request.params

    const localeService = new LocaleService()

    const locale = await localeService.getLocaleByName(name)

    return response.json(locale)
  }
}