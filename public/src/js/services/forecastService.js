(function () {
  'use strict';

  angular.module('App').service('forecastService', [ '$http', 'api', function ($http, api) {
    this.getForecasts = function () {
      return api.findAllForecasts();
    };

    this.getCities = function () {
      return api.findAllLocales();
    };

  }]);
}());
