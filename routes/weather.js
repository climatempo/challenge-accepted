'use-strict';

//Base
const modelWeather = require('../base/weather.json');

//Controller
const { getWeatherByIdLocale } = require('../controller/weather.js');

//Route to find the specific weather forecasts using locale info.
function getWeather(server) {
	try {
		server.route({
			method: 'GET',
			path: '/weather-forecasts/{id}',
			options: {
                auth: false
            },
			handler: (req, head) => {
				return getWeatherByIdLocale(req.params.id);
			}
		});
	} catch (err) {
		return "Error on server."
	}
};

module.exports = {
	getWeather
};