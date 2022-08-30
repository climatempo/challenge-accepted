const locales = require('./locales.json');
const weather = require('./weather.json');

module.exports = () => ({
    locales: locales,
    weather: weather
});