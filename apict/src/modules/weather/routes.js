module.exports = (() => {

    const express = require('express');
    const WeatherController = require('./controller');
    let router = express.Router();

    router
        .get('/:locale', WeatherController.find);

    return router;

})();
