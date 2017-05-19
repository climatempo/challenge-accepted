(function() {
    'use strict';

    angular
        .module('controller', [])
        .controller('ClimatempoCtrl', ClimatempoCtrl);

    ClimatempoCtrl.$inject = ['$scope', '$http', 'climatempoService'];

    function ClimatempoCtrl($scope, $http, climatempoService) {

        var vm = this;
        vm.getLocales = getLocales;
        vm.localeChange = localeChange;
        vm.locale = '';
        vm.data = [];


        function getLocales(text) {

            var params = { search: text };
            // params filter
            return climatempoService.getLocales(params)
                .then(function success(response) {
                    return response;
                }, function error(response) {
                    console.error('error', response);
                });
        }

        function localeChange(item) {
            if (item) {
                vm.locale = item;
                climatempoService.getWeather(item.id)
                    .then(function success(response) {
                        //console.info('success', response);
                        vm.data = response;
                    }, function error(response) {
                        console.error('error', response);
                    });
            } else {
                reset();
            }
        }

        function reset() {
            vm.locale = '';
            vm.data = [];
        }
    }
})();