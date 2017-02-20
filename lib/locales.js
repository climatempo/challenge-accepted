'use strict';


const Locale = function () {};

Locale.prototype.findWeather = (locale, data) => {
  if (data) {
    data = JSON.parse(data);

    const localeName = data.map(locale => locale.locale.name);
    const localeWeather = data.map(locale => locale.weather);

    if (localeName[0] === locale) {
      return localeWeather[0];
    } else if (localeName[1] === locale) {
      return localeWeather[1];
    } else {
      return 'Location not found';
    }
  } else {
    return new Error('There is no data');
  }
};

module.exports = Locale;
