var app = angular.module("app.Auth");

app.controller("LogoutController", ["UserService", function (UserService) {
    UserService.logout();
}]);
