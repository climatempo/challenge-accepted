const weather = require('../base/weather.json')

module.exports = function (app) {
	let WeatherController = {
		getByName: function (req, res) {
			const name = req.params.name;
			const erro = 'Previsão não encontrada para localidade';

			const response = [];
			weather.map(function (city, index) {
				if (city.locale.name == name) {
					city.weather.map(function (forecast, index) {
						response[index] = forecast;
					});
				}
			})
			if (response.length > 2) {
				res.status(200).json({
					success: true,
					weather: response
				});
			} else {
				res.status(500).json({
					error: erro
				})
			}
		}
	}
	return WeatherController;
}