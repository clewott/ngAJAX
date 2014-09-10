angular.module("httpProducts",
   ["ngRoute"
    ])

.config(function ($routeProvider) {

   $routeProvider
       .when("/httpproducts/create", {
           templateUrl: "views/httpProducts/create.html",
           controller: "httpProductsCtrl"
       })
       .when("/httpproducts/:id/edit", {
           templateUrl: "views/httpProducts/edit.html",
           controller: "httpProductsCtrl"
       })
       .when("/httpproducts", {
           templateUrl: "views/httpProducts/list.html",
           controller: "httpProductsCtrl"
       })
       .when("/httpproducts/:id", {
           templateUrl: "views/httpProducts/show.html",
           controller: "httpProductsCtrl"
       })
       .otherwise({
           redirectTo: "/"
       });
});
