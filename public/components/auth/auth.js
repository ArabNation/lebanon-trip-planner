var app = angular.module("app.Auth", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/signup", {
			templateUrl: "./components/auth/signup/signup.html",
			controller: "SignupController"
		})
		.when("/login", {
			templateUrl: "./components/auth/login/login.html",
			controller: "LoginController"
		})
		.when("/loguot", {
			controller: "LogoutController",
			template: ""
		})
}])
app.service("UserService", ["$http", "$location", "LebanonService", "AdminService", "CommentService", function ($http, $location, LebanonService, AdminService, CommentService) {
	this.signup = function (user) {
		return $http.post("/auth/signup", user)
	};

	this.login = function (user) {
		console.log(user)
		return $http.post("/auth/login", user).then(function (response) {
			console.log(response.data.user)
			LebanonService.setToken(response.data.token);
			CommentService.setToken(response.data.user.username)
			AdminService.setToken(response.data.user.admin)
			return response;
		});
	};
	this.logout = function () {
		LebanonService.removeToken();
		$location.path("/")
	}
	this.isAuthenticated = function () {
		return !!LebanonService.getToken();
	};
}])
app.service('LebanonService', [function () {
	this.setToken = function (token) {
		localStorage["lebanon"] = token;
	};
	this.getToken = function () {
		return localStorage["lebanon"]
	};
	this.removeToken = function () {
		localStorage.removeItem("lebanon")
	};
}]);

app.service('AdminService', [function () {
	this.setToken = function (token) {
		localStorage["admin"] = token;
	};
	this.getToken = function () {
		return localStorage["admin"]
	};
	this.removeToken = function () {
		localStorage.removeItem("admin")
	};
}]);
app.service('CommentService', [function () {
	this.setToken = function (name) {
		localStorage["name"] = name;
	};
	this.getToken = function () {
		return localStorage["name"]
	};
	this.removeToken = function () {
		localStorage.removeItem("name")
	};
}]);
app.service('AuthInterceptor', ["$q", "$location", "LebanonService", function ($q, $location, LebanonService) {
	this.request = function (config) {
		var token = LebanonService.getToken();
		if (token) {
			config.headers = config.headers || {};
			config.headers.Authorization = "Bearer " + token;
		}

		return config;
	}
	this.responseError = function (response) {
		if (response.status === 401) {
			LebanonService.removeToken();
			$location.path("/login");

		}
		return $q.reject(response);
	}
}])
app.config(["$httpProvider", function ($httpProvider) {
	$httpProvider.interceptors.push("AuthInterceptor")
}])
