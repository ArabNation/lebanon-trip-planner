var app = angular.module("myapp.home", ["ngRout", "myapp"]);
app.config(function ($routProvider) {
    $routProvider.when("/home", {
        templateUrl: "./home.html",
        controller: "homeController"
    })
})
app.controller("homeController", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data
            console.log(response.data)
        }, function (error) {
            alert("Error" + ":" + error.status)
        })
    }
    //post to data
    $scope.submait = function () {
        var add = {

        }
    }
    //delete from data
    $scope.remove = function (id) {
        lebanonService.delete(id).then(function (response) {
            $scope.getData()
        }, function (error) {
            alert("Error" + error.status)
        })
    }
    //update data
    $scope.save = function (id, data) {
        lebanonService.put(id, data).then(function (response) {
            $scope.getData()
        }, function (error) {
            alert("Error" + error.status)
        })
    }

})
