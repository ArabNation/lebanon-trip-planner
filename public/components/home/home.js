var app = angular.module("app.home", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "./components/home/home.html",
        controller: "homeCtrl"
    })
})
app.controller("homeCtrl", function ($scope, lebanonService) {
    //get data
    $scope.getData = function () {
        lebanonService.get().then(function (response) {
            $scope.data = response.data
            console.log(response.data)
        }, function (error) {
            alert("error" + ":" + error.status)
        })

    }
    $(document).ready( function() {
    $('#myCarousel').carousel({
      
        interval:   4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});
});


     