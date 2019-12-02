module.exports = (() => {

  const express = require('express');
	let app = express();

	function _initialize() {
		_configBodyParser();
		_configCors();
		_setRoutes();
	}

	function _configBodyParser() {
		const bodyParser = require('body-parser');

		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
	}

	function _configCors() {
		const cors = require('cors');
		app.use(cors());
	}

	function _setRoutes() {
		app.use('/locale', require('./modules/locale/routes'));
		app.use('/weather', require('./modules/weather/routes'));
	}

	_initialize();

	return app;

})();
