angular.module('DesafioAPP', [])
.controller('DesafioController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

    $scope.climas = [];
    $scope.mensagem = '';
    $scope.filtro = '';
    $scope.texto = '';
    $scope.showlocales = false;
    $scope.weather = '/api/weather/';
  
    var tempo = 2000;
    var clear = function () { 
        $scope.mensagem = ''; 
    };

    $scope.filtrokey = function (event){
        if(event.key == 'Enter'){
            $scope.getweather();
        };
    }

    $scope.change = function (){
        $scope.showlocales = !$scope.showlocales;
    };

    $scope.getweather = function (){

        $scope.texto = '';
        $scope.climas = [];

        if ($scope.filtro == ''){
            $scope.mensagem = 'Entre com o filtro';
            $timeout(clear, tempo);
        } else {
            $http.get($scope.weather + $scope.filtro)
            .then(function(response) {
                $scope.climas = response.data;
                if (!$scope.climas)
                {
                    $scope.mensagem = 'Nada foi encontrado';
                    $timeout(clear, tempo);
                } else {
                    $scope.texto = 'Previsão para ' + $scope.climas.locale.name + ' - ' + $scope.climas.locale.state;
                }
            })
            .catch(function(erro){
                console.log(erro);
            });
        }
    }   	
}])
.directive('comboLocales', function() {
	var ddo = {};
	ddo.restrict = 'E';
	ddo.templateUrl = '/partial/combo.html';
	ddo.controller = function($scope, $http) {
		$http.get('/api/locales')
            .then(function(response) {
                $scope.locales = response.data;
            })
            .catch(function(erro){
                console.log(erro);
            });
	};
	return ddo;
});