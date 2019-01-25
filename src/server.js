'use-strict';

const Hapi = require('hapi');
const locale = require('./routes/locales.js');
const weather = require('./routes/weather.js');

const server = new Hapi.Server({
	port: 5000
});

async function api() {
	await server.start();
	await locale.getLocales(server);
	await locale.getLocaleByName(server);
	await weather.getWeather(server);
	await weather.getWeatherByLocale(server);

	process.on('unhandledRejection', (err) => {       
		console.log(err); 
		process.exit(1);    
    });
};

api();
