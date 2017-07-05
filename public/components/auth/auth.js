var app = angular.module("myapp.Auth", []);
app.config(["$routepProvider", function ($routeprovider) {
    $routeprovider
        .when("/signup", {
            templateUrl: "components/auth/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login.html",
            controller: "LoginController"
        })
        .when("/loguot", {
            controller: "LogoutController",
            template: ""
        })
}])
