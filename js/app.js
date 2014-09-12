 angular.module("ngProduct",
    ["localProducts",
     "restangularPosts",
     "httpProducts",
     "httpClient",
     "ngRoute",
     "app.directives",
     "ui.utils"
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
