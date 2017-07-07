var app = angular.module("app.beirut", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/beirut", {
        templateUrl: "./components/lebanon/beirut/beirut.html",
        controller: "beirutCtrl"
    })
})
app.controller("beirutCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data.filter(function (item) {
                return item.city === "beirut"
            })
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }
})
