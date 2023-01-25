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
}

module.exports = WeathersController;
