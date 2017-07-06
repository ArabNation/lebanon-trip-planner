var app = angular.module("app.tripoli", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/tripoli", {
        templateUrl: "./components/lebanon/tripoli/tripoli.html",
        controller: "tripoliCtrl"
    })
})
app.controller("tripoliCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data.filter(function (item) {
                return item.city === "tripoli"
            })
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }
})
