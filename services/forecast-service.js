var fs = require('fs');

let service = {};

service.findForecastByLocale = (localeId) => {
    return new Promise((resolve, reject) => {
        fs.readFile('base/weather.json', 'utf8', (err, data) => {
            if (err) reject(err);

            data = JSON.parse(data);

            let forecasts = data.filter((forecast) => forecast.locale.id == localeId);

            resolve(forecasts);
        });
    });
}

module.exports = service;