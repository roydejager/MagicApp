(function () {
    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/user/:username", {
                templateUrl: "../src/app/components/user/user.html",
                controller: "UserController"
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