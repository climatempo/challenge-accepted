module.exports = (() => {

    const HttpResponseService = require('../common/services/httpResponseService');
    const LocaleService = require('./business/service/localeService');

    function find(request, response) {
        let locale = request.params.locale;

        LocaleService.getLocale(locale).then(data => {
            return HttpResponseService.success(response, data);
        }).catch((err) => {
            return HttpResponseService.error(response, err);
        });

    }

    return {
        find: find
    };

})();
