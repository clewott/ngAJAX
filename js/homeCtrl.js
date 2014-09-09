angular.module("ngProduct")
    .controller("homeCtrl", function ($scope,$log) {
        $scope.greeting = "Is this working?";
        $log.info("home view loaded");
    });
