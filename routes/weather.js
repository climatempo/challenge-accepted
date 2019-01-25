'use-strict';

const modelWeather = require('../base/weather.json');

function getWeather(server) {
	server.route({
		method: 'GET',
		path: '/weather-forecasts',
		handler: (req, head) => {
			return modelWeather;
		}
	});
};

function getWeatherByLocale(server) {
	server.route({
		method: 'GET',
		path: '/weather-forecasts/{id}',
		handler: (req, head) => {
			let id = req.params.id;
			return modelWeather.filter(data => {
				return data.locale.id == id ? data.weather : null;
			});
		}
	});
};

module.exports = {
	getWeather,
	getWeatherByLocale
};