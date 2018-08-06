'use strict';

var fs = require('fs');
var jsonWeather = JSON.parse(fs.readFileSync('base/weather.json'));
var jsonLocales = JSON.parse(fs.readFileSync('base/locales.json'));

module.exports = {
  getWeather: function getWeather(city) {
    var locale = jsonLocales.find(function (locale) {
      return locale.name.match(city);
    });
    if (locale) {
      var dataCity = [];
      dataCity.push(jsonWeather.find(function (weather) {
        return weather.locale.id === locale.id;
      }));
      return dataCity;
    }
    return [];
  }
};