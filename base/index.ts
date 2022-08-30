const jsonServer = require('json-server');

const locales = require('./locales.json');
const weather = require('./weather.json');

const data = {
    locales: locales,
    weather: weather
};

const server = jsonServer.create();
const router = jsonServer.router(data);

server.use(router);
server.listen(3333, () => {
    console.log('Listening on port 3333');
});