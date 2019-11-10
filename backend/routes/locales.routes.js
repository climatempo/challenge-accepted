

module.exports = function(app){
    const localesHandler = require('../controllers/locales.controller');
    app.get('/locales/:id', localesHandler.getLocalesById);
    app.get('/locales', localesHandler.getLocales);
}