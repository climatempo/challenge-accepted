var path = require('path');
var api = require('../app/app')

module.exports = function(app){

    app.route('/api/weather/:q')
    .get(api.weather);

    app.route('/api/locales')
    .get(api.locales);
}
