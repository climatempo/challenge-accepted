const localesRoutes = require('../config/constants').localesRoutes;

/**
 * Rota de retorno de localidades
 */

module.exports = function (app) {
	const LocalesController = app.controllers.locales;
	
	app.route(localesRoutes.getAll)
		.get(LocalesController.getAll);
}