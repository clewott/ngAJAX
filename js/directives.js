angular.module("app.directives", [])
  .directive("productDirective", function () {
    return {
      restrict:"EA",
      templateUrl:"views/directives/product.html",
      scope: {
        title: "@",
        image: "@",
        price: "@",
        description: "@",
      },
      link: function (scope, element, attrs) {
        // This where where I can run jquery
      }
    };
  })
  .directive("cartDirective", function () {
    return {
      restrict:"EA",
      templateUrl:"views/directives/cart.html",
      scope: {
        quantity: "@",
        title: "@",
        image: "@",
        price: "@",
        description: "@"
      },
      link: function (scope, element, attrs) {
        // This where where I can run jquery
      }
    };
  })
