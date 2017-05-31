(function () {
  'use strict';

  angular.module('App').service('api', [ '$http', function ($http) {
    this.findAllForecasts = function () {
      return $http.get('/base/weather.json');
    };

    this.findAllLocales = function () {
      return $http.get('/base/locales.json');
    };

  }]);
}());