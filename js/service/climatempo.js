(function() {
    'use strict';

    angular
        .module('service', [])
        .factory('climatempoService', climatempoService);

    climatempoService.$inject = ['$http', '$q', '$mdToast', '$timeout'];

    function climatempoService($http, $q, $mdToast, $timeout) {
        var service = {};

        service.getLocales = getLocales;
        service.getWeather = getWeather;

        return service;

        function getLocales(params) {
            var req = $http({
                    url: '/api/climatempo/locales',
                    method: 'GET',
                    headers: {
                        'Authorization': '',
                        'Content-Type': 'application/json'
                    },
                    params: params
                })
                .then(handleSuccess, handleError);

            return req;
        }

        function getWeather(id) {
            var req = $http({
                    url: '/api/climatempo/weather/' + id,
                    method: 'GET',
                    headers: {
                        'Authorization': '',
                        'Content-Type': 'application/json'
                    }
                })
                .then(handleSuccess, handleError);

            return req;
        }


        // private functions

        function handleSuccess(response) {
            //console.info('handleSuccess', response);
            return response.data;
        }

        function handleError(response) {
            console.info('handleError', response);
            return;
            if (!angular.isObject(response.data) || !response.data.Message) {
                response.data.Message = 'Ops! Ocorreu um erro desconhecido';
            }

            $mdToast.show(
                $mdToast.simple()
                .textContent(response.data.Message)
                .action('Fechar')
                .highlightAction(true)
                .highlightClass('md-accent')
                .position('bottom right')
                .hideDelay(0)
                .theme('error-toast')
            );

            return ($q.reject(response.data.Message));
        }
    }
})();