const wheaters = require('../base/weather.json');

/**Rotina para busca de previsão por cidade */
exports.getWheaterByCity = async(req, res) => {
    try {
        let previsao = await wheaters.filter(item => item.locale.name == req.params.location);
        res.send(previsao);
    } catch (error) {
        res.status(404).send('Ocorreu um erro ao buscar previsão.');
    }
}