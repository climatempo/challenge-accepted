const WeathersServices = require('../Services/weathersServices');

const statusCodes = require('../statusCodes');

class WeathersController {
  constructor() {
    this._weathersServices = new WeathersServices();
  }

  getAllWeathers = async (_req, res) => {
    const allWeathers = await this._weathersServices.getAllWeathers();
    res.status(statusCodes.OK).json(allWeathers);
  };

  getWeatherByLocale = async ({ query }, res, next) => {
    if (query.locale) {
      const weatherByLocale = await this._weathersServices.getWeatherByLocale(
        query.locale
      );
      return res.status(statusCodes.OK).json(weatherByLocale);
    }
    next()
  };
}

module.exports = WeathersController;
