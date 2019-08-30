export const getWeatherByLocaleId = async ({ localeId }) => {
  let weathers = null;
  try {
    weathers = require('./weather.json');
  } catch (err) {
    global.console.error(err);
  }

  return Promise.resolve(weathers.find(weather => weather.locale.id === localeId) || { weather: null });
};
