'use-strict';

//Base
const modelLocale = require('../base/locales.json');

//Helper
const removeAccents = require('remove-accents');

//Function to remove special characteres and spaces.
function parseText(text) {
	while(text.indexOf(" ") != -1) {
		text = text.replace(" ", "");
	}
	return removeAccents((text.trim()).toLowerCase());
};

//Find the locale using the name's passed.
async function getLocaleByName(str) {
	try {
		let name = parseText(str);
		return modelLocale.filter(data => {
			let locale = parseText(data.name);
			return locale == name ? data.id : null;
		})
	} catch (err) {
		return "Error on server."
	}
};

module.exports = {
	getLocaleByName
};