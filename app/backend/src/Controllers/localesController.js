const LocalesServices = require('../Services/localesServices');
const statusCodes = require('../statusCodes');

class LocalesController {
  constructor() {
    this._localeServices = new LocalesServices();
  }

  getAllLocales = async (_req, res) => {
    const allLocales = await this._localeServices.getAllLocales();
    res.status(statusCodes.OK).json(allLocales);
  };

  getLocaleByName = async ({ params }, res) => {
    const localeByName = await this._localeServices.getLocaleByName(
      params.name
    );
    res.status(statusCodes.OK).json(localeByName);
  };
}

module.exports = LocalesController;
