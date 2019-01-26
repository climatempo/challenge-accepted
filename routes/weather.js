'use-strict';

const modelWeather = require('../base/weather.json');

function getWeatherByLocale(server) {
	try {
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
	} catch (err) {
		return "Error on server."
	}
};

module.exports = {
	getWeatherByLocale
};