var app = angular.module("app.home", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: ".components/home/home.html",
        controller: "homeCtrl"
    })
})
app.controller("homeCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }
})
