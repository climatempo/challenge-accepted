const locales = require('../base/locales.json')


/**
 * Controller de localidades, retorna um objeto contendo chave e valor iguais com o nome das localidades mapeadas no JSON
 */

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