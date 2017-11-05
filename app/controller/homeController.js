var Locale = require('../models/locale.js');
var Weather = require('../models/weather.js');

var homeController = {
	index: function(req, res, next) {
	  res.render('index');
	},

	localePesquisar: function(req,res,next){
		var locale = new Locale(req.body.nome);

		locale.procurarLocale(function(retorno){
			res.send(retorno);
		});
	},

	weatherPesquisar: function(req,res,next){
		var weather = new Weather(req.body.id);

		weather.procurarPrevisao(function(retorno){
			res.send(retorno);
		});
	}
}

module.exports = homeController;