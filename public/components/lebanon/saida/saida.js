var app = angular.module("app.saida", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/saida", {
        templateUrl: "./components/lebanon/saida/saida.html",
        controller: "saidaCtrl"
    })
})
app.controller("saidaCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data.filter(function (item) {
                return item.city === "saida"
            })
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }

})
