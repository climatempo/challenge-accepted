angular.module("climatempo").controller("climaapp", function ($scope,$http) {
	$scope.app  = "climatempo";
	$scope.days = [];
	$scope.len  = 0;
	$scope.error = false;
	$scope.search = function (name) {
		$http.get("../weather/",{params:{"name":name}})
		.then(function (data) {
			if (data != null && data != undefined){
				$scope.len  = data.data.length;	
				$scope.days = data.data;
			}else{
				console.log("Error: Valor nao retornardo");
			}					
		});
	};			
});