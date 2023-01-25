const weathersModel = require('../Models/weather');
const LocalesServices = require('./localesServices');

class WeathersServices {
  constructor() {
    this._weathersModel = weathersModel;
    this._localesServices = new LocalesServices();
  }

  getAllWeathers = async () => {
    const allWeathers = await weathersModel();
    return allWeathers;
  };
}

module.exports = WeathersServices;
