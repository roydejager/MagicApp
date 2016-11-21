(function () {
    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/test", {
                templateUrl: "../src/app/components/test/test.html"
            })
            .when('/repo/:username/:reponame', {
                templateUrl: "../src/app/components/repo/repo.html",
                controller: "RepoController"
            })
            .when('/block', {
                templateUrl: '../src/app/components/block/block.html',
                controller: 'BlockController'
            })
            .otherwise({redirectTo: "/main"});

    });
}());