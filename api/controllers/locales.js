(() => {
    "use strict";
    
    var passport = require('passport');
    var locales = require('../base/locales.json');

    module.exports.controller = function(server) {
        var handler = function(req, res, next) {
            res.send({result: locales});
        };
        server.post('locales', passport.authenticate('token'), handler);
    };
})();
