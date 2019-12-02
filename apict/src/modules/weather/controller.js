module.exports = (() => {

    const HttpResponseService = require('../common/services/httpResponseService');
    const WeatherService = require('./business/service/weatherService');

    // Find weather by locale id
    function find(request, response) {
        let locale = request.params.locale;

        WeatherService.getWeatherByLocale(locale).then(data => {
            return HttpResponseService.success(response, data);
        }).catch((err) => {
            return HttpResponseService.error(response, err);
        });

    }

    return {
        find: find
    };

})();
