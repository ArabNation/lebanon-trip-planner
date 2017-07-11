angular.module("myapp").controller("navbarController", function ($scope, UserService, $location, AdminService) {
    $scope.user = {};
    $scope.newlogin = function () {
        console.log($scope.user)
        UserService.login($scope.user).then(function (response) {
            $location.path("/home");
        });
        $scope.check = function () {
            console.log(AdminService.getToken())
            return AdminService.getToken() === "admin"
        }
    }
})
