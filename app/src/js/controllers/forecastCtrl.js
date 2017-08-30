/**
 * Criado por Diego Hideky em 30/08/17.
 * Email: <diego.hideky@gmail.com>
 *
 * Controller da página forecast.html
 * Responsável gerenciar os valores recebidos de forecastService e introduzí-los ao $scope
 */

(function (){
  'use strict';

  angular.module('app').controller('forecastCtrl', [ '$scope', 'forecastService',
    function ($scope, forecastService) {

    $scope.forecasts = [];
    $scope.cities = [];

    forecastService.getForecasts().then(function (res) {
      $scope.forecasts = res.data;
    });

    forecastService.getCities().then(function (res) {
      $scope.cities = res.data;
    });

  }]);
}());
