module.exports = function (app) {

	/**
	* Controller que faz as ações de carregamento dos dados para as rotas
	*/
	let IndexController = {
		index: function (req, res) {
			res.render('home/index');
		}
	}
	return IndexController;
}
