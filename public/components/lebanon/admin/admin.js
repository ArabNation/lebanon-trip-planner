var app = angular.module("app.admin", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/admin", {
        templateUrl: "./components/lebanon/admin/admin.html",
        controller: "adminCtrl"
    })
})
app.controller("adminCtrl", function ($scope, lebanonService) {
    $scope.edit = true;
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }

    //post to data
    $scope.submit = function () {
        var add = {
            city: $scope.city,
            name: $scope.name,
            location: $scope.location,
            img: $scope.img,
            desc: $scope.desc
        }
        lebanonService.post(add).then(function (response) {
            $scope.getData()
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }

    //delete from data
    $scope.remove = function (id) {
        lebanonService.delete(id).then(function (response) {
            $scope.getData()
        }, function (error) {
            alert("error" + ":" + error.status)
        })
    }

    //update data
    $scope.update = function (id, data) {
        srv.put(id, data).then(function (response) {
            $scope.getData()
        }, function (error) {
            alert("error" + ":" + error.status)
        })
    }


})
