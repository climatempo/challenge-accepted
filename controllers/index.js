let Locale 			= require('../modules/locale');
let Weather 		= require('../modules/weather');
const DEFAULT_CITY 	= 'Osasco'

module.exports = function (app) {

	/**
	* Controller que faz as ações de carregamento dos dados para as rotas
	*/
	let IndexController = {

		/**
		* Action que faz o carregamento dos dados padrões
		* na página index
		*/
		index: function (req, res) {
			let city 		= DEFAULT_CITY;
				locale 		= Locale(city),
				forecast	= Weather(locale);
			res.render('home/index', { locale : locale, forecast : forecast } );
		},

		/**
		* Action que faz o carregamento dos dados padrões
		* de previsão
		*/
		weather: function (req, res) {
			let city 	 = req.body.locale;
			let	locale 	 = Locale(city);
			if (!locale) {
				req.flash ('erro', 'LOCALIDADE NÃO ENCONTRADA');
				res.redirect ('/');
			} else {
				let	forecast = Weather(locale);
				res.render('home/weather', { locale : locale, forecast : forecast });
			}
		}
	}
	return IndexController;
}