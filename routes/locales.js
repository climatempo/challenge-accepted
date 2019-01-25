'use-strict';

const modelLocale = require('../base/locales.json');

async function getLocales(server) {
	server.route({
		method: 'GET',
		path: '/locales',
		handler: (req, head) => {
			return modelLocale;
		}
	});
};

async function getLocaleByName(server) {
	server.route({
		method: 'GET',
		path: '/locales/{name}',
		handler: (req, head) => {
			let name = req.params.name;
			return modelLocale.filter(data => {
				
				let parseNameReceived = String(name).toLowerCase();
				let parseNameData = String(data.name).toLowerCase();
				
				return parseNameData == parseNameReceived ? data.id : null;
			})
		}
	});
};

module.exports = {
	getLocales,
	getLocaleByName
};