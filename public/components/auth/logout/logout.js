var app = angular.module("myapp.Auth");

app.controller("LogoutController", ["UserService", function (UserService) {
    UserService.logout();
}]);
