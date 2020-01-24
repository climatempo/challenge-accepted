const { readFile, parseFile } = require('./base');

let allWeather = null;

const loadWeatherData = async () => {
  if (allWeather) {
    return allWeather;
  }

  const content = await readFile('weather.json');
  allWeather = parseFile(content);

  return allWeather;
};

const getWeatherByCityId = id => {
  return loadWeatherData().then(weatherData => {
    return weatherData.find(
      weather => weather.locale && weather.locale.id === id
    );
  });
};

module.exports = {
  getWeatherByCityId,
};
