angular.module("myapp").service("lebanonService", function ($http) {
    var url = "http://localhost:6969/api/lebanon/"
    this.get = function () {
        return $http.get(url)
    }
    this.post = function (add) {
		console.log(add)
        return $http.post(url, add)
    }
    this.delete = function (id) {
        return $http.delete(url + id)
    }
    this.put = function (id, data) {
        return $http.put(url + id, data)
    }
})
