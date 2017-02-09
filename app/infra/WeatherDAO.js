function WeatherDAO(){
	this._fs = require('fs');
}

WeatherDAO.prototype.lista = function(callback){

	this._fs.readFile('base/weather.json', 'utf8', callback);
}

module.exports = function(){
	return WeatherDAO;
}