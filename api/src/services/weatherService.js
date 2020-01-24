const { findLocaleByName } = require('../repository/localeRepository');
const { getWeatherByCityId } = require('../repository/weatherRepository');
const DefaultError = require('../errors/defaultError');

const getWeatherForCity = async (req, city) => {
  const locale = await findLocaleByName(city);

  if (!locale) {
    throw DefaultError.notFound(req, 'City not found');
  }

  const weather = await getWeatherByCityId(locale.id);

  if (!weather) {
    throw DefaultError.notFound(req, 'Weather not found');
  }

  return weather;
};

module.exports = {
  getWeatherForCity,
};
