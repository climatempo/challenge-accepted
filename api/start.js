(() => {
    "use strict";

    let config = require('./config')

    let fs = require('fs'),
        passport = require('passport'),
        restify = require('restify'),
        tokenStrategy = require('passport-accesstoken').Strategy;

    let server;

    startRestifyServer();
    startAuthStrategy();
    loadControllers();

    function loadControllers() {
        fs.readdirSync('./controllers').forEach(function(file) {
            if (file.substr(-6) !== 'min.js' && file.substr(-3) === '.js') {
                var route = require('./controllers/' + file);
                route.controller(server);
                console.log('Start controller: ' + file);
            }
        });

        console.log('Controllers loadeds.');
    }

    function startAuthStrategy() {
        passport.serializeUser(function(user, done) {
            done(null, user);
        });
        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
        passport.use(new tokenStrategy(function(token, done) {
            if (token == config.api_token) {
                return done(null, {'app': 'app'});
            } else {
                return done(null, false);
            }
        }));
    }

    function startRestifyServer() {
        var options = {
            name: config.name,
            version: "1.0.0"
        };

        // Start restify server.
        server = restify.createServer(options);

        console.log('Server started.');

        // Allow headers.
        restify.CORS.ALLOW_HEADERS.push('accept');
        restify.CORS.ALLOW_HEADERS.push('lang');
        restify.CORS.ALLOW_HEADERS.push('origin');
        restify.CORS.ALLOW_HEADERS.push('sid');
        restify.CORS.ALLOW_HEADERS.push('x-requested-with');
        restify.CORS.ALLOW_HEADERS.push('x-token');

        server.use(restify.acceptParser(server.acceptable));
        server.use(restify.bodyParser());
        server.use(restify.CORS());
        server.use(restify.gzipResponse());
        server.use(restify.queryParser());
        server.use(passport.initialize());
        server.use(passport.session());

        var port = process.env.PORT || config.port;
        server.listen(port, function() {
            console.log('%s listening at %s', server.name, server.url);
        });
    }
})();
