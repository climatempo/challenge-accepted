const weatherRoutes = require('../config/constants').weatherRoutes;

module.exports = function (app) {
	const WeatherController = app.controllers.weather;
	
	app.route(weatherRoutes.getByName)
		.get(WeatherController.getByName);
}