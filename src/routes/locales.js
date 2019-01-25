'use-strict';

const modelLocale = require('../base/locales.json');

async function getLocales(server) {
	server.route({
		method: 'GET',
		path: '/locales',
		config: {
			handler: (req, head) => {
				return modelLocale;
			}
		}
	});
};

async function getLocaleByName(server) {
	server.route({
		method: 'GET',
		path: '/locales/{name}',
		config: {
			handler: (req, head) => {
				let name = req.params.name;
				return modelLocale.filter(data => {
					return data.name == name ? data.id : null;
				})
			}
		}
	});
};

module.exports = {
	getLocales,
	getLocaleByName
};