(function () {

    var module = angular.module('app');

    var SidebarController = function ($scope) {
        $scope.isActive = false;
        $scope.activeButton = function() {
            $scope.isActive = !$scope.isActive;
        }
    };
    module.controller('SidebarController', SidebarController)
}());