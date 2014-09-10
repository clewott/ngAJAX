angular.module("httpClient")
    .factory("httpClientSvc", function ($rootScope, $log, $http) {

      var urlClient = "http://tiy-fee-rest.herokuapp.com/collections/crottenHttpClient";

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
        deleteItem: deleteItem
      };

    });
