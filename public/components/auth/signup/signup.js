var app = angular.module("app.Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";
    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Password do not match";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("there was a problem:" + response.data)
            })
        }
    }
	}])
