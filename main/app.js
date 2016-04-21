angular
.module('portfolio', [
    'ngRoute', 'contactMod', 'learnMod', 'personalMod', 'blankMod'
])
    .config(['$routeProvider', function ($routeProvider){
        $routeProvider
        
        .when ('/blank', {
            templateUrl: 'view/blank.html',
            controller: 'blankCtrl'
        })
        .when('/learn', {
            templateUrl: 'view/learn.html',
            controller: 'learnCtrl'
        })
        .when ('/personal', {
            templateUrl: 'view/personal.html',
            controler: 'personalCtrl'
        })
        .when ('/contact', {
            templateUrl: 'view/contact.html',
            controller: 'contactCtrl'
        })
        
        .otherwise({
            redirectTo: '/blank'
        })
            
    }])

.controller('MainCtrl',['$scope', function($scope){
    
}])