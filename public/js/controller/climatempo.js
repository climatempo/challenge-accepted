angular.module("climatempo").controller("climaapp", function ($scope,$http) {
	$scope.app  = "climatempo";
	$scope.days = [];
	$scope.len  = 0;
	$scope.search = function (name) {
		$http.get("../weather/",{params:{"name":name}})
		.then(function (data) {
			$scope.len  = data.data.length;	
			$scope.days = data.data;
					
		});
	};			
});