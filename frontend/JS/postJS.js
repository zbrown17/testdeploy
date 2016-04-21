angular
	.module('PostMod', [])
	.controller("PostCtrl", ["$scope",'HttpService', function ($scope, HttpService){
$scope.test = "reached controller";
        
$scope.post = {
            title: $scope.postTitle,
            description: $scope.postDes,
            category: $scope.postGames,
            body: $scope.postBody    
        }
        
    $scope.postPost = function (){
        var blogPost = $scope.post;
        HttpService.PostEntry(blogPost)
        console.log('worked');
    }
        
	}])

    .service("HttpService", ["$http", function ($http){
        this.PostEntry = function(postObj) {
            var baseUrl = 'localhost:3000';
            $http.post(baseUrl + '/api/posts', postObj)
        }
    }])