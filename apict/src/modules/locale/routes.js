module.exports = (() => {

    const express = require('express');
    const LocaleController = require('./controller');
    let router = express.Router();

    router
        .get('/find/:locale', LocaleController.find);

    return router;

})();
