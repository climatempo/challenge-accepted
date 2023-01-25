const WeathersServices = require('../Services/weathersServices');

const statusCodes = require('../statusCodes');

class WeathersController {
  constructor() {
    this._weathersServices = new WeathersServices();
  }

  getAllWeathers = async ({ query }, res, next) => {
    if (query.name) return next();
    const allWeathers = await this._weathersServices.getAllWeathers();
    res.status(statusCodes.OK).json(allWeathers);
  };

  getWeatherByLocale = async ({ query }, res) => {
    if (query.name) {
      const weatherByLocale = await this._weathersServices.getWeatherByLocale(
        query.name
      );
      res.status(statusCodes.OK).json(weatherByLocale);
    }
  };
}

module.exports = WeathersController;
