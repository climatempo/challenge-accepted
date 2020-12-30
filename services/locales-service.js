var fs = require('fs');
var stringUtils = require('../utils/string-utils');

let service = { };

service.findLocaleByName = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('base/locales.json', 'utf8', (err, data) => {
            if (err) reject(err);

            data = JSON.parse(data);
            name = stringUtils.removeAccents(name).toLowerCase();

            let localesFound = data.filter((locale) => 
                                                stringUtils.removeAccents(locale.name.toLowerCase())
                                                            .includes(name));

            resolve(localesFound);
        });
    });
}

module.exports = service;