let moment = require('moment');

module.exports = function(app) {


	// Default route
	app.get('/', function(req, res){

		res.render('weather', {weatherDB: {}, error: ""});
	});


	// Search route
	app.get('/search', function(req, res){

		let weatherDAO = new app.infra.WeatherDAO();

		weatherDAO.lista(function(err, data){

			if (err) {

				res.format({
					html: function(){

						res.status(500).render('weather', {
							weatherDB: {},
							error: "Não foi possível realizar a busca. Tente novamente mais tarde."
						});
					},
					json: function(){

						res.status(500).json();
					}	
				});
			} else {

				let weatherJson = JSON.parse(data);
				
				// filter for compare with city send by user
				let weatherFiltered = weatherJson.filter(function(obj){

					return obj.locale.name.trim().toUpperCase() == req.query.locale.trim().toUpperCase() ;
				});


				// If has data from search
				if(weatherFiltered.length > 0) {

					res.format({
						html: function(){
							res.status(200).render('weather', {
								weatherDB: weatherFiltered[0],
								error: "",
								moment: moment
							});
						},
						json: function(){
							res.status(400).json();
						}	
					});
				} else {

					res.format({
						html: function(){
							res.status(200).render('weather', {
								weatherDB: {},
								error: "Não foi possível encontrar previsões para o local específicado. Por favor verifique o local."
							});
						},
						json: function(){
							res.status(400).json();
						}	
					});
				}				
			}
		});
	});

}