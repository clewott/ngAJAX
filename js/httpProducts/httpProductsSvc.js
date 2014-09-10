angular.module("httpProducts")
    .factory("httpProductsSvc", function ($rootScope, $log, $http) {

        var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/crottenHttpProduct";

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

        return {
            getProducts: getProducts,
            getProduct: getProduct,
            addProduct: addProduct,
            updateProduct: updateProduct,
            deleteProduct: deleteProduct

        };
    });
