angular.module("myapp").directive("myNav",function(){
	return{
		restrict:"E",
		templateUrl:"./components/navbar/navbar.html",
		controller:"navbarController"
		
	}
})
