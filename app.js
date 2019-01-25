'use-strict';

const Hapi = require('hapi');
const routeLocale = require('./routes/locales.js');
const routeWeather = require('./routes/weather.js');
const inert = require('inert');

const server = new Hapi.Server({
	host: 'localhost',
	port: 5000
});

async function api() {
	await server.register(inert);

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, head) => {
            return head.file('./static/index.html');
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

	await server.start();
	await routeLocale.getLocales(server);
	await routeLocale.getLocaleByName(server);
	await routeWeather.getWeather(server);
	await routeWeather.getWeatherByLocale(server);

	process.on('unhandledRejection', (err) => {       
		console.log(err); 
		process.exit(1);    
    });
};

api();
