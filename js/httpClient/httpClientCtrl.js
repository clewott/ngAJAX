angular.module("httpClient")
    .controller("httpClientCtrl", function ($scope,$log,$location,httpProductsSvc, $routeParams, $rootScope, httpClientSvc) {
      httpProductsSvc.getProducts().then(function (products) {
        console.log(products);
        $scope.products = products.data;
      });

      httpProductsSvc.getProduct($routeParams.id).then(function (response) {
        $scope.singleProduct = response.data;
        console.log(response)
      });

      httpClientSvc.getItems().then(function (items) {
        console.log(items);
        $scope.items = items.data;
      });

      httpClientSvc.getItem($routeParams.id).then(function (response) {
        $scope.singleItem = response.data;
        console.log(response)
      });

      $scope.addItem = function (item) {
        httpClientSvc.addItem(item).then(function () {
          $location.path("/shop");
        });
      };

      $scope.editItem = function (item) {
        httpClientSvc.updateItem(item).then(function () {
        });
      };

      $scope.deleteItem = function (item) {
        httpClientSvc.deleteItem(item).then(function () {
          $location.path("/shop/cart");
        });
      };

      $rootScope.$on("item:added",  function() {
        httpClientSvc.getItems().then(function (items) {
          $scope.items = items.data;
        });
      });

      $rootScope.$on("item:deleted",  function() {
        httpClientSvc.getItems().then(function (items) {
          $scope.items = items.data;
        });
      });
    });
