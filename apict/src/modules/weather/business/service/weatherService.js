module.exports = (() => {

    const WeatherRepository = require('../repository/weatherRepository');

    function getWeatherByLocale(locale, reduce = true) {
        return new Promise((resolve, reject) => {
            WeatherRepository.getWeatherByLocale(locale).then(data => {
                data = data.map(value => {
                    return value.weather;
                });
                if (reduce) // if have more than 1 result, put everything together
                    resolve(data.reduce((acc, val) => acc.concat(val), []));
                else resolve(data);
            }, err => reject(err));
        });
    }

    return {
        getWeatherByLocale: getWeatherByLocale,
    };

})();
