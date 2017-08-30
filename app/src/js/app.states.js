/**
 * Criado por Diego Hideky em 30/08/17.
 * Email: <diego.hideky@gmail.com>
 *
 * Rotas da aplicação
 */

(function () {
  'use strict';

  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/forecast");
      $stateProvider
        .state('home', {
          abstract: true,
          url: "",
          templateUrl: "views/pages/content.html"
        })
        .state('home.forecast', {
          url: "/forecast",
          templateUrl: "views/pages/forecast.html",
          controller: "forecastCtrl"
        })
        .state('home.omito', {
          url: "/omito",
          templateUrl: "views/pages/omito.html"
        });
    }]);
}());
