var api = {}
var dbweather = require('../data/weather')
var dblocales = require('../data/locales')

api.weather = function(req, res) {

    var pesquisa = dbweather.find(function (obj){
         return obj.locale.name == this;  
    },req.params.q);

   res.json(pesquisa);

};

api.locales = function(req, res) {
   res.json(dblocales);
};

module.exports = api;