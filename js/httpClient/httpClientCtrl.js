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
        var newItem = {
          title:item.title,
          image:item.image,
          price:item.price,
          description:item.description
        }
        httpClientSvc.addItem(newItem).then(function () {
          $location.path("/shop");
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

        httpProductsSvc.editInventoryItem(product);

      });

      $scope.review = {};

    };

      $scope.editItem = function (item) {
        httpClientSvc.updateItem(item).then(function () {
        });
      };

      $scope.deleteItem = function (id) {
        $log.info(id)
        httpClientSvc.deleteItem(id).then(function () {
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
