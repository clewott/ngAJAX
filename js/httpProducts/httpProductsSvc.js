angular.module("httpProducts")
    .factory("httpProductsSvc", function ($rootScope, $log, $http) {

        var urlBase = "http://chshackathon.herokuapp.com/collections/httpProduct";

        var getProducts = function () {
          return $http.get(urlBase);
        };

        var getProduct = function (id) {
          return $http.get(urlBase + "/" + id);
        };

        var addProduct = function (product) {
          return $http.post(urlBase, product).then(function (response) {
            $rootScope.$broadcast("product:added");
            $log.info("product:added");
            });
        };

        var updateProduct = function (product) {
          return $http.put(urlBase + "/" + product._id, product).then(function (responose) {
            $rootScope.$broadcast("product:updated");
            $log.info("product:updated");
          });
        };

        var deleteProduct = function (product) {
          return $http.delete(urlBase + "/" + product._id, product).then(function (response) {
            $rootScope.$broadcast("product:deleted");
            $log.info("product:deleted");
          });
        };

        var addReview = function(product) {

          $http.put(urlBase + "/" + product._id, product).success(function(data) {

          $rootScope.$broadcast("review:added");
          $log.info("review:added");

          });

        };

        return {
            getProducts: getProducts,
            getProduct: getProduct,
            addProduct: addProduct,
            updateProduct: updateProduct,
            deleteProduct: deleteProduct,
            addReview: addReview

        };
    });
