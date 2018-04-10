let locale = require('../base/locales.json');

/**
* Módulo Locale,
* recebe o nome de uma localidade e
* retorna se a localidade existe no arquivo locale.json
*/
module.exports = function (localeName) {
	let city = locale.filter(function (elem, index, arr) {
		return localeName == locale[index].name;
	});

	if (city.length == 0) {
		return null;
	} else {
		return city.pop().name;
	}
}