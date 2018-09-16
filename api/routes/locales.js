const localesRoutes = require('../config/constants').localesRoutes;

module.exports = function (app) {
	const LocalesController = app.controllers.locales;
	
	app.route(localesRoutes.getAll)
		.get(LocalesController.getAll);
}