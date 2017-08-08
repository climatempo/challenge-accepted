(() => {
    "use strict";
    
    var passport = require('passport');
    var weather = require('../base/weather.json');

    module.exports.controller = function(server) {
        var handler = function(req, res, next) {
            let id_city = JSON.parse(req.params.id);
            // Caso o id seja "null" retorna todas as previsões.
            if (id_city == null) {
                res.send({result: weather});
            } else {
                let isTheLocal = function(local) {
                    return local.locale.id === id_city;
                }

                let localForecast = weather.filter(isTheLocal);
                res.send({result: localForecast});
            }
        };
        server.post('weather', passport.authenticate('token'), handler);
    };
})();
