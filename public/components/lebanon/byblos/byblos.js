var app = angular.module("app.byblos", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/byblos", {
        templateUrl: "./components/lebanon/byblos/byblos.html",
        controller: "byblosCtrl"
    })
})
app.controller("byblosCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data.filter(function (item) {
                return item.city === "byblos"
            })
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }
})
