angular
	.module('MovieMod', [])
	.controller("MovieCtrl", ["$scope", function ($scope){
		$scope.gears = false;
        $scope.water = false;
        $scope.other1 = false;
        $scope.other2 = false;
	}])