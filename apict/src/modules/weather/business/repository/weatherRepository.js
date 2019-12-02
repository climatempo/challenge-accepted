module.exports = (() => {

    const Database = require('../../../database/loadData');
    const moment = require('moment');

    async function getData() {
        return await Database.getData('base/weather.json');
    }

    async function getWeatherByLocale(locale, currentWeek = false) {
        try {
            let data = await getData();
            return data.filter(value => {
                return (currentWeek) ?
                    (moment().isBetween(value.period.begin, value.period.end) && value.locale.id === parseInt(locale))
                    :
                    value.locale.id === parseInt(locale);

            });
        } catch(err) {
            throw err;
        }

    }

    return {
        getWeatherByLocale: getWeatherByLocale,
    };

})();
