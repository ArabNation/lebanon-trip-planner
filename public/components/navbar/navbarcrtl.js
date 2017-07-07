angular.module("myapp").controller("navbarController", function($scope, UserService, $location){
	$scope.user = {};
	$scope.newlogin = function(){
		console.log($scope.user)
		UserService.login($scope.user).then(function (response){
			$location.path("/home");
		})
	}
})
		
			
		