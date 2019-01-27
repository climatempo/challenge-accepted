'use-strict';

const Hapi = require('hapi');

 //Routes
const routeLocale = require('./routes/locales.js');
const routeWeather = require('./routes/weather.js');

//Helper of Hapi.js to listen static files.
const inert = require('inert');


async function api() {
    try {
        const server = new Hapi.Server({
            host: 'localhost',
            port: 5000
        });
        
    	await server.register(inert);

        server.route({
            method: 'GET',
            path: '/',
            handler: (req, h) => {
                return h.file('./static/index.html');
            }
        });

        server.route({
            method: 'GET',
            path: '/js/{file*}',
            handler:{
                directory: {
                    path: 'static/js'
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/css/{file*}',
            handler:{
            	directory: {
            		path: 'static/css'
            	}
            }
        });

        server.route({
            method: 'GET',
            path: '/images/{file*}',
            handler:{
            	directory: {
            		path: 'static/images'
            	}
            }
        });

        await server.start(err => {
            if (err) {
                server.log('error', 'failed to start server')
                throw err
            }
        });

    	await routeLocale.getLocaleByName(server);
    	await routeWeather.getWeatherByLocale(server);

        return server;
    } catch (err) {
        return ("Error on server.", err);
    }
};

api()
    .then((server) => console.log('Server listening on', server.settings.port))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
