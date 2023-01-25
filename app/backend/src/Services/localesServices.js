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
}

module.exports = LocalesServices;
