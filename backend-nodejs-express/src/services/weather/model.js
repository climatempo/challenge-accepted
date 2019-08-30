import path from 'path';

export const getWeatherByLocaleId = async ({ localeId }) => {
  let weathers = null;
  try {
    weathers = require(path.resolve(`${__dirname}/../../../../base/weather.json`));
  } catch (err) {
    global.console.error(err);
  }
  return Promise.resolve(weathers ? weathers.find(weather => weather.locale.id === localeId) : {});
};
