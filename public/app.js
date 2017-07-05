var app = angular.module("myapp", ["ngRoute", "app.home","app.saida","app.beirut","app.tripoli","app.byblos","app.tyre","app.balbak" ])
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
})
app.controller("mainCrtl", function ($scope) {

})
