angular
	.module('ShowMod', [])
	.controller("ShowCtrl", ["$scope", function ($scope){
		$scope.gears = false;
        $scope.water = false;
        $scope.other1 = false;
        $scope.other2 = false;
	}])