angular.module("httpClient",
   ["ngRoute"
    ])

.config(function ($routeProvider) {

   $routeProvider
        .when("/shop/cart", {
            templateUrl: "views/httpClient/cart.html",
            controller: "httpClientCtrl"
        })
        .when("/shop", {
           templateUrl: "views/httpClient/list.html",
           controller: "httpClientCtrl"
         })
        .when("/shop/:id", {
           templateUrl: "views/httpClient/show.html",
           controller: "httpClientCtrl"
         })
        .otherwise({
           redirectTo: "/"
         });
});
