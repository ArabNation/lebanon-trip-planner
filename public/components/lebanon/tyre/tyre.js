var app = angular.module("app.tyre", ["ngRoute", "myapp", "app.Auth"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/tyre", {
        templateUrl: "./components/lebanon/tyre/tyre.html",
        controller: "tyreCtrl"
    })
})
app.controller("tyreCtrl", function ($scope, lebanonService, CommentService) {
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

    };
	$scope.save = function (id, item, mohmmed) {
		var comment = {
			name: CommentService.getToken(),
			message: mohmmed
		}
		item.comments.push(comment)
		lebanonService.put(id, item).then(function(response){
			$scope.getData()
		})
		//lebanonService.put()
	}

})
