angular.module('app.ajax',[])

.service("TokenService", ["$sessionStorage", function ($sessionStorage){
    this.setToken = function (token) {
     $sessionStorage.token = token;   
    }

    this.getToken = function () {
        return $sessionStorage.token;
    }

    this.removeToken = function () {
        delete $sessionStorage.token;
    }
}])
    
.service('Config', ['TokenService', function (TokenService) {
    var self = this;
    var host = "http://localhost:3000/";
    this.authUrl = host + 'auth/'
    this.config = function () {
        return {
            headers: {
                'Authorization': "Bearer " + TokenService.getToken()
            }
        }
    }
}])


.service("UserService", ["$http", "TokenService", 'Config', function ($http, TokenService, Config){
    var baseUrl = "http://localhost:3000/";
    this.user = undefined;

    this.createUser = function (userName, password, email) {
        var newUser = {username: userName, password: password, email: email}
        
        $http.post(baseUrl + 'auth/add-user', newUser).then(function (response){
            TokenService.setToken(response.token);
            this.user = response.user;
            }
        )}

    this.login = function (userName, password) {
        var credentials = {username: userName, password: password};
        
        return $http.post(baseUrl + "auth/login", credentials).then(function (response){
            TokenService.setToken(response.token);
            this.user = response.user;
            return true
        },  
            function (err) {
            return false
        })
    }

    this.logout = function () {
        TokenService.removeToken();
    }

    this.isLoggedIn = function () {
        console.log(TokenService.getToken())
        return !_.isUndefined(TokenService.getToken())
    }

}])



