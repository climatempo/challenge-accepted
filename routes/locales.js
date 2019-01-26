'use-strict';

const modelLocale = require('../base/locales.json');

async function getLocaleByName(server) {
	try {
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
	} catch (err) {
		return "Error on server."
	}
};

module.exports = {
	getLocaleByName
};