const base = require("../base/weather.json");

function weather(){
	this.weather = base;
}
weather.prototype.findByName = function(name) {
	const len = this.weather.length
	for (var i = 0; i < len; i++) {
		if(this.weather[i].locale.name == name){
			return this.weather[i].weather;
		}
	}
	return null;
};

module.exports = new weather();