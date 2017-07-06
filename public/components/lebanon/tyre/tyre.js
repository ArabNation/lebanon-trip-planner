var app = angular.module("app.tyre", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/tyre", {
        templateUrl: "./components/lebanon/tyre/tyre.html",
        controller: "tyreCtrl"
    })
})
app.controller("tyreCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data.filter(function (item) {
                return item.city === "tyre"
            })
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }
})
