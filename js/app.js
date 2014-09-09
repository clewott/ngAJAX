 angular.module("ngProduct",
    ["localProducts",
     "restangularPosts",
     "httpPosts",
     "ngRoute"
     ])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});

angular.module("restangularPosts", []);
angular.module("httpPosts", []);
