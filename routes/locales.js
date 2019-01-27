'use-strict';

const modelLocale = require('../base/locales.json');
const removeAccents = require('remove-accents');

//Function to remove special characteres and spaces.
function parseText(text) {
	return removeAccents(String((text).replace(" ", "")).toLowerCase());
}

//Route to find the locale using the name that's passed.
async function getLocaleByName(server) {
	try {
		server.route({
			method: 'GET',
			path: '/locales/{name}',
			handler: (req, head) => {
				let name = parseText(req.params.name);
				return modelLocale.filter(data => {
					let locale = parseText(data.name);
					return locale == name ? data.id : null;
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