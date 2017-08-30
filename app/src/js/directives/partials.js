/**
 * Diego Hideky em 30/08/17.
 * Email: <diegohideky@gmail.com>
 *
 * Este arquivo define as diretivas utilizada pelo angular
 * São pedaços da aplicação que podem ser utilizados em demais locais
 */

(function () {
  'use strict';

  angular.module('app')
    .directive('climaHeader', [ function () {
      return {
        restrict: 'E',
        templateUrl: 'views/partials/header.html'
      }
    }])
    .directive('climaFooter', [ function () {
      return {
        restrict: 'E',
        templateUrl: 'views/partials/footer.html'
      }
    }]);
}());