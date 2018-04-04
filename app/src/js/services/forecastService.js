/**
 * Criado por Diego Hideky em 30/08/17.
 * Email: <diego.hideky@gmail.com>
 *
 * Responsável por manipular informações para fazer a request na api
 *
 * OBS: Neste caso, como a aplicação é pequena, não foi necessário manipular,
 *      porém é bem utilizado caso a aplicação contenha formulário
 */

(function () {
  'use strict';

  angular.module('app').service('forecastService', [ 'api', function (api) {
    this.getForecasts = function () {
      return api.findAllForecasts();
    };

    this.getCities = function () {
      return api.findAllLocales();
    };

  }]);
}());
