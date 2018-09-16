const locales = require('../base/locales.json')

module.exports = function (app) {
	let LocalesController = {
		getAll: function (req, res) {
			let response = [];
			locales.map(function (locale, index) {
				response[locale.name] = locale.name;
			})

			let cities = Object.assign({}, response);

			res.status(200).json({
				success: true,
				locales: cities
			})
		}
	}
	return LocalesController;
}