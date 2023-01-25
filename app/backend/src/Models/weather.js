const { jsonContent } = require('../utils/readJsonFiles');

const getWeather = async () => {
  const allWeather = await jsonContent('weather');
  return allWeather;
};

module.exports = getWeather;
