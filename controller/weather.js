'use-strict';

//Base
const modelWeather = require('../base/weather.json');

//Route to find the specific weather forecasts using locale info.
function getWeatherByIdLocale(id) {
	try {
		return modelWeather.filter(data => {
			return data.locale.id == id ? data.weather : null;
		});
	} catch (err) {
		return ("Error to find weather", err);
	}
};

module.exports = {
	getWeatherByIdLocale
};