let weather = require('../base/weather.json');

/**
* Módulo Locale,
* recebe o nome de uma localidade e
* retorna se a previsão para a mesma
*/
module.exports = function (locale) {
	let forecast =  weather.filter(function(elem, index, arr) {
		return locale == weather[index].locale.name;
	});
	if (forecast.length == 0) {
		return null;
	} else {
		return forecast.pop().weather;
	}
}