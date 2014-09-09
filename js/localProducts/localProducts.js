angular.module("localProducts",
   ["ngRoute"
    ])

.config(function ($routeProvider) {

   $routeProvider
       .when("/products/create", {
           templateUrl: "views/localProducts/create.html",
           controller: "localProductsCtrl"
       })
       .when("/products/:idx/edit", {
           templateUrl: "views/localProducts/edit.html",
           controller: "localProductsCtrl"
       })
       .when("/products", {
           templateUrl: "views/localProducts/list.html",
           controller: "localProductsCtrl"
       })
       .when("/products/:idx", {
           templateUrl: "views/localProducts/show.html",
           controller: "localProductsCtrl"
       })

       .otherwise({
           redirectTo: "/"
       });
});
