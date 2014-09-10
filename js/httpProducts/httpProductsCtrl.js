angular.module("httpProducts")
    .controller("httpProductsCtrl", function ($scope,$log,$location,httpProductsSvc, $routeParams, $rootScope) {
        $scope.hello = "The Product Page Is Working!";
        $log.info("Products view loaded");

        httpProductsSvc.getProducts().success(function (products) {
          console.log(products);
          $scope.products = products;
        });

        httpProductsSvc.getProduct($routeParams.id).then(function (response) {
          $scope.singleProduct = response.data;
          console.log(response)
        });

        $scope.addProduct = function (product) {
          httpProductsSvc.addProduct({
            title:product.title,
            image:product.image,
            price:product.price,
            description:product.description,
            reviews: []
          }).then(function () {
            $location.path("/httpproducts");
          });
        };

        $scope.editProduct = function (product) {
          httpProductsSvc.updateProduct(product).then(function () {
            $location.path("/httpproducts");
          });
        };

        $scope.deleteProduct = function (product) {
          httpProductsSvc.deleteProduct(product).then(function () {
            $location.path("/httpproducts");
          });
        };

        $rootScope.$on("product:added",  function() {
          httpProductsSvc.getProducts().then(function (products) {
            $scope.products = products.data;
          });
        });

        $rootScope.$on("product:updated",  function() {
          httpProductsSvc.getProducts().then(function (products) {
            $scope.products = products.data;
          });
        });

        $rootScope.$on("product:deleted",  function() {
    			httpProductsSvc.getProducts().then(function (products) {
            $scope.products = products.data;
          });
        });
    });
