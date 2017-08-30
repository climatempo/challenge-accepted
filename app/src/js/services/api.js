/**
 * Criado por Diego Hideky em 30/08/17.
 * Email: <diego.hideky@gmail.com>
 *
 * Responsável por fazer requests
 */

(function () {
  'use strict';

  angular.module('app').service('api', [ '$http', function ($http) {
    this.findAllForecasts = function () {
      return $http.get('/base/weather.json');
    };

    this.findAllLocales = function () {
      return $http.get('/base/locales.json');
    };

  }]);
}());