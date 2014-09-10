angular.module("httpClient")
    .factory("httpClientSvc", function ($rootScope, $log, $http) {

      var urlClient = "http://chshackathon.herokuapp.com/collections/httpClient";

      var getItems = function () {
        return $http.get(urlClient);
      };

      var getItem = function (id) {
        return $http.get(urlClient + "/" + id);
      };

      var addItem = function (item) {
        return $http.post(urlClient, item).then(function (response) {
          $rootScope.$broadcast("item:added");
          $log.info("item:added");
          });
      };

      var updateItem = function (item) {
        return $http.put(urlClient + "/" + item._id, item).then(function (responose) {
          $rootScope.$broadcast("item:updated");
          $log.info("item:updated");
        });
      };

      var deleteItem = function (item) {
        return $http.delete(urlClient + "/" + item._id, item).then(function (response) {
          $rootScope.$broadcast("item:deleted");
          $log.info("item:deleted");
        });
      };

      return {
        getItems: getItems,
        getItem: getItem,
        addItem: addItem,
        updateItem: updateItem,
        deleteItem: deleteItem
      };

    });
