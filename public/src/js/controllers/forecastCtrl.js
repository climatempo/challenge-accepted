(function (){
  'use strict';

  angular.module('App').controller('forecastCtrl', [ '$scope', 'forecastService',
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
