/**
 * Created by diegohideky on 2/10/17.
 */
const express = require('express');
var router = express.Router();

const locales = require('../../base/locales.json');
const weather = require('../../base/weather.json');
const moment = require('moment');


/**
 * PEGA pagina inicial
 */
router.get('/', function(req, res){

    res.render('pages/index', {
        cities: locales,
        dataLocale: weather,
        moment: moment
    });

});


/**
 * Rota de pesquisa de cidade
 */
router.get('/search/:city', function (req, res) {
    const response = req.params.city;

    const cities = getCityByName(response);

    var dataLocale = [];

    var color = 'not-found';
    var msg = 'Cidade Não Encontrada';
    var success = false;

    if (cities[0] != null) {

        dataLocale = getDays(cities[0].id);

        msg = 'Cidade Encontrada';
        color = 'found';
        success = true;
    }

    res.render('pages/index', {
        cities: locales,
        dataLocale: dataLocale,
        moment: moment,
        color: color,
        msg: msg,
        success: success
    });
});


/**
 * CONFIA NO PAI
 */
router.get('/mito', function(req, res){

    res.render('pages/mito');

});

function getCityByName(name) {
    return locales.filter(
        function(locales) {
            return locales.name.toLowerCase() == name.toLowerCase();
        }
    );
}


function getDays(id) {
    return weather.filter(
        function(weather) {
            return weather.locale.id == id;
        }
    );   
}


module.exports = router;