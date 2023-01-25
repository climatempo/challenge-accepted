const localesModel = require('../Models/locales');

const formatLocalesName = require('../utils/formatLocalesName');

class LocalesServices {
  constructor() {
    this._localesModel = localesModel;
  }

  getAllLocales = async () => {
    const allLocales = await this._localesModel();
    return allLocales;
  };

  getLocaleByName = async (localeName) => {
    const allLocales = await this._localesModel();

    // since it will have only one locale by name, it's better to use find than filter or other HOF
    const localeByName = allLocales.find(
      (locale) => formatLocalesName(locale.name) === formatLocalesName(localeName)
    );

    return localeByName;
  };
}

module.exports = LocalesServices;
