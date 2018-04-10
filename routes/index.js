module.exports = function (app) {

	/**
	* Variável que recebe a controller index carregada pelo
	* express-load
	*/
	let home = app.controllers.index;

	/**
	* Rota principal
	*/
	app.route('/').get(home.index);

	/**
	* Rota weather para buscar dados de previsão
	*/
	app.route('/weather').post(home.weather);
}