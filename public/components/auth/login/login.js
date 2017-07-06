var app = angular.module("app.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {
		console.log(user)
        UserService.login(user).then(function (response) {
            $location.path("/");
        }, function (response) {
            alert(response.data);
        });
    }
}]);

