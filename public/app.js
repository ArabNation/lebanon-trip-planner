var app = angular.module("myapp", ["ngRoute", "app.admin", "app.home", "app.saida", "app.beirut", "app.tripoli", "app.byblos", "app.tyre", "app.balbak", "app.Auth", "app.contact"])
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
})
app.controller("mainCrtl", function ($scope) {

})
