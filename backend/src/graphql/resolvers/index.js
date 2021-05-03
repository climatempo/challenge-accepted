const Locale = require('../../models/locale');
const Weather = require('../../models/weather');

module.exports = {
  locales: async () => {
    try {
      const locales = await Locale.find();
      return locales;
    } catch (err) {
      throw err;
    }
  },
  weathers: async () => {
    try {
      const weathers = await Weather.find();
      return weathers;
    } catch (err) {
      throw err;
    }
  },
  createLocale: async args => {
    const locale = new Locale({
      name: args.localeInput.name,
      state: args.localeInput.state,
      latitude: +args.localeInput.latitude,
      longitude: +args.localeInput.longitude,
    });
    return await locale.save().then(result => {
      console.log(result);
      return { ...result._doc };
    }).catch(err => {
      console.log(err);
      throw err;
    });
  },
  createWeather: async args => {
    const weather = new Weather({
      period: {
        begin: new Date(args.weatherInput.period.begin),
        end: new Date(args.weatherInput.period.end),
      },
      locale: args.weatherInput.localeId,
      weather: args.weatherInput.weather.map(weatherItem => ({ ...weatherItem, date: new Date(weatherItem.date) }))
    });
    return await weather.save().then(result => {
      console.log(result);
      return { ...result._doc };
    }).catch(err => {
      console.log(err);
      throw err;
    });
  }
}