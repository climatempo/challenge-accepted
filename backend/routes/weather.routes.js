module.exports = function(app) {
    const wheaterHandler = require('../controllers/weather.controller');
    app.get('/weather/:location', wheaterHandler.getWheaterByCity);
}