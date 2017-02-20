/* Referenciando módulos que serão utilizados na api.js */
var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	mongodb  	= require('mongodb'),
	objectId 	= require('mongodb').ObjectId,
	fs 			= require('fs');



/* 
 * Variáveis para instâncias */

//variavel que armazena a instância do módulo express dentro da variável app
var app = express();

/* 
 * Variáveis */

//variavel para armazenar a porta onde o servidor irá escutar
var port = 8080;

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//informamos ao servidor em qual porta ele irá escutar
app.listen(port);

//criamos mongoDB
var db = new mongodb.Db(
	'clima',
	new mongodb.Server('localhost', 27017,{}),
	{}
);

//Informação console
console.log('API nodejs está online e escutando na porta ' + port);


// GET todas as Locales
app.get('/api_locale', function(req, res){

	res.setHeader("Access-Control-Allow-Origin","http://localhost");

	db.open( function(err, mongoclient){
		mongoclient.collection('locales', function(err,collection_locales){
			collection_locales.find().toArray(function(err, results){
				if(err){
					res.json(err);
				}else{
					res.json(results);
				}
				mongoclient.close();
			});
		});
	});
});

// GET Locale por id
app.get('/api_locale/:id_locale', function(req, res){

	res.setHeader("Access-Control-Allow-Origin","http://localhost");

	db.open( function(err, mongoclient){
		mongoclient.collection('locales', function(err,collection_locales){
			collection_locales.find( { name : req.params.id_locale.replace("\\%20"," ") } ).toArray(function(err, results_locales){

				if(err){
					res.json(err);
				}else{
					res.json(results_locales);
				}

				mongoclient.close();
			
			});
		});
	});

});

// GET Weather
app.get('/api_weather', function(req, res){

	res.setHeader("Access-Control-Allow-Origin","http://localhost");

	db.open( function(err, mongoclient){
		mongoclient.collection('weather', function(err,collection_weather){
			collection_weather.find().toArray(function(err, results_weather){
				if(err){
					res.json(err);
				}else{
					res.json(results_weather);
				}
				mongoclient.close();
			});
		});
	});
});

// GET Weather por id de locale
app.get('/api_weather/:id_locale', function(req, res){

	res.setHeader("Access-Control-Allow-Origin","http://localhost");

	db.open( function(err, mongoclient){
		mongoclient.collection('weather', function(err,collection_locales){
			collection_locales.find( { "locale.id" : parseInt(req.params.id_locale) } ).toArray(function(err, results_locales){

				if(err){
					res.json(err);
				}else{
					res.json(results_locales);
				}

				mongoclient.close();
			
			});
		});
	});
	
});