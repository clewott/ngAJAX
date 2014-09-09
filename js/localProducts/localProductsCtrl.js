angular.module("localProducts")
    .controller("localProductsCtrl", function ($scope,$log,$location,localProductsSvc, $routeParams) {
        $scope.hello = "The Product Page Is Working!";
        $log.info("Products view loaded");

        $scope.products = localProductsSvc.getProducts();

        $scope.theProduct = localProductsSvc.findProductByIdx($routeParams.idx);
        console.log($scope.theProduct);

        $scope.addProduct = function (product) {
            localProductsSvc.addProduct(product);
            $location.path("/products");
        };

        $scope.editProduct = function (idx, product) {
          localProductsSvc.updateProduct(idx, product);
          $location.path("/products");
        };

        $scope.removeProduct = function (idx) {
            localProductsSvc.deleteProduct(idx);
            $location.path("/products");
        };
    });
