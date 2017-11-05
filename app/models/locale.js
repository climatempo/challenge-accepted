var config 	= require('../../config/config.js');
var fs 		= require('fs');

var Locale = function(nome){

	this.procurarLocale = function(callback) {
		
		Locale.todosLocais(function(retorno)
		{
			if(retorno !== [])
			{
				var dadosRetorno = [];

				for(var i = 0; i < retorno.length; i++)
				{
					if(retorno[i].name.toUpperCase() === nome.toUpperCase())
					{
						dadosRetorno.push(retorno[i]);
						break;
					}
				}

				if(dadosRetorno.length > 0) {
					callback.call(null, {erro: false, locale: dadosRetorno});
				}
				else{
					callback.call(null, {erro: true, mensagem: 'Cidade nao encontrada'});
				}
			}
			else {
				callback.call(null, {erro: true, mensagem: 'Erro interno'});
			}
		});
	}
};

Locale.todosLocais = function(callback){
	var fs = require('fs');
	fs.readFile(config.FILE_LOCALES, function(err,data){
		var locales = [];
		
		if(!err) {
			locales = JSON.parse(data);
		}

		callback.call(null,locales);
	});
};

Locale.todasPrevisoes = function(callback){
	var fs = require('fs');
	fs.readFile(config.FILE_WEATHERS, function(err,data){
		var weathers = [];
		
		if(!err) {
			weathers = JSON.parse(data);
		}

		callback.call(null,weathers);
	});
};

module.exports = Locale;