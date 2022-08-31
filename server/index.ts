const jsonServer = require('json-server');

const locales = require('../base/locales.json');
const weather = require('../base/weather.json');

const data = {
    locales: locales,
    weather: weather
};

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults({ Nocors: true })

server.use(middlewares);
server.use(router);
server.listen(3333);