module.exports = (() => {

    const LocaleRepository = require('../repository/localeRepository');

    function getLocale(locale) {
        return new Promise((resolve, reject) => {
            LocaleRepository.getLocale(locale).then(data => {
                data = data.map(value => {
                    return {id: value.id, name: value.name, state: value.state}
                });
                resolve(data);
            }, err => reject(err));
        });
    }

    return {
        getLocale: getLocale,
    };

})();
