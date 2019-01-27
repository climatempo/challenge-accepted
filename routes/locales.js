'use-strict';

//Base
const modelLocale = require('../base/locales.json');

//Controller
const { getLocaleByName } = require('../controller/locales.js');

//Route to find the locale using the name that's passed.
async function getLocale(server) {
	try {
		server.route({
			method: 'GET',
			path: '/locales/{name}',
			options: {
                auth: false
            },
			handler: (req, head) => {
				return getLocaleByName(req.params.name);
			}
		});
	} catch (err) {
		return ("Error to find locale", err);
	}
};

module.exports = {
	getLocale
};