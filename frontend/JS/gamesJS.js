angular
	.module('GameMod', [])
	.controller("GameCtrl", ["$scope",'HttpService', function ($scope, HttpService){
        $scope.gears = false;
        $scope.water = false;
        $scope.other1 = false;
        $scope.other2 = false;
        
    }])