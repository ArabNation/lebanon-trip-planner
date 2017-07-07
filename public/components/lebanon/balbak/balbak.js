var app = angular.module("app.balbak", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/balbak", {
        templateUrl: "./components/lebanon/balbak/balbak.html",
        controller: "balbakCtrl"
    })
})
app.controller("balbakCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data.filter(function (item) {
                return item.city === "balbak"
            })
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }
})
