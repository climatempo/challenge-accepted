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

  getWeatherByLocale = async (name) => {
    const { id: localeId } = await this._localesServices.getLocaleByName(name);
    const allWeathers = await this.getAllWeathers();
    const weatherByName = allWeathers.find(
      (weather) => weather.locale.id === localeId
    );

    return weatherByName;
  };
}

module.exports = WeathersServices;
