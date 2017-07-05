angular.module("myapp").service("LebanonService", function ($http) {
    var url = "http://localhost:8080/lebanon/"
    this.get = function () {
        return $http.get(url)
    }
    this.post = function (add) {
        return $http.post(url, add)
    }
    this.delete = function (id) {
        return $http.delete(url + id)
    }
    this.put = function (id, data) {
        return $http.put(url + id, data)
    }
})
