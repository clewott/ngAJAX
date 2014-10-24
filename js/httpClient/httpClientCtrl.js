angular.module("httpClient")
    .controller("httpClientCtrl", function ($scope,$log,$location,httpProductsSvc, $routeParams, $rootScope, httpClientSvc, $route) {
      $scope.cartTotal = 0;

      httpProductsSvc.getProducts().then(function (products) {
        $scope.products = products.data;
      });

      httpProductsSvc.getProduct($routeParams.id).then(function (response) {
        $scope.singleProduct = response.data;
      });

      httpClientSvc.getItems().then(function (items) {
        $scope.items = items.data;
        for (var i = 0; i < items.data.length; i++) {
          $scope.cartTotal += (items.data[i].price * items.data[i].quantity);
        };
      });

      httpClientSvc.getItem($routeParams.id).then(function (response) {
        $scope.singleItem = response.data;
      });

      $scope.addItem = function (item) {
        var newItem = {
          quantity:item.quantity,
          title:item.title,
          image:item.image,
          price:item.price,
          description:item.description
        }
        $scope.items.push(newItem)
        httpClientSvc.addItem(newItem).success(function () {
          $location.path("/shop/cart");
        });
      };

      $scope.addReview = function(review) {

      httpProductsSvc.getProduct($routeParams.id).success(function(product) {

        $scope.singleProduct = product;
        $log.info($scope.singleProduct);
        $scope.singleProduct.reviews.push({

          reviewAuthor:review.author,
          reviewDescription:review.description,
          reviewDate:new Date()

        });

        httpProductsSvc.addReview(product);

      });

      $scope.review = {};

    };

      $scope.editItem = function (item) {
        httpClientSvc.updateItem(item).then(function () {
        });
      };

      $scope.deleteItem = function (id) {
        $log.info(id)
        httpClientSvc.deleteItem(id).success(function () {
          $location.path("/shop/cart");
        });
      };

      // $scope.cartTotal = httpClientSvc.cartTotal;

      // $log.info($scope.cartTotal);


      $rootScope.$on("item:added",  function() {
        httpClientSvc.getItems().then(function (items) {
          $scope.items = items.data;
          $route.reload();
        });
      });

      $rootScope.$on("item:updated",  function() {
        httpClientSvc.getItems().then(function (items) {
          $scope.items = items.data;
          $route.reload();
        });
      });

      $rootScope.$on("item:deleted",  function() {
        httpClientSvc.getItems().then(function (items) {
          $scope.items = items.data;
          $route.reload();
        });
      });
    });
