var config 	= require('../../config/config.js');
var fs 		= require('fs');

var Weather = function(id){

	this.id = id;

	this.procurarPrevisao = function(callback)
	{
		var idWeather = this.id;

		Weather.todasPrevisoes(function(retorno)
		{
			if(retorno !== [])
			{
				var dadosRetorno = null;

				for(var i = 0; i < retorno.length; i++)
				{
					if(retorno[i]['locale'].id === parseInt(idWeather))
					{
						dadosRetorno = retorno[i]['weather'];
						break;
					}
				}

				if(dadosRetorno.length > 0) {
					callback.call(null, {erro: false, weather: dadosRetorno});
				}
				else{
					callback.call(null, {erro: true, mensagem: 'Previsao nao encontrada'});
				}
			}
			else {
				callback.call(null, {erro: true, mensagem: 'Erro interno'});
			}
		});
	}
};

Weather.todasPrevisoes = function(callback){
	var fs = require('fs');
	fs.readFile(config.FILE_WEATHERS, function(err,data){
		var weathers = [];
		
		if(!err) {
			weathers = JSON.parse(data);
		}

		callback.call(null,weathers);
	});
};

module.exports = Weather;