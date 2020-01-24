const { getWeatherForCity } = require('../services/weatherService');

// GET /weather?city=name
const getWeather = async (req, res, next) => {
  const { city } = req.query;
  const weather = await getWeatherForCity(req, city);

  return res.json(weather);
};

module.exports = {
  getWeather,
};
