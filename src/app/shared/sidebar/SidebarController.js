(function () {

    var module = angular.module('app');


    var SidebarController = function ($scope) {
        $scope.isActive = false;
        $scope.activeButton = function() {
            $scope.isActive = !$scope.isActive;
        };

        $scope.items = [
            {
                icon: 'heart',
                item: 'Life counter'
            },
            {
                icon: 'dice',
                item: 'Roll a dice'
            },
            {
                icon: 'coin',
                item: 'Flip a coin'
            },
            {
                icon: 'card',
                item: 'Search for cards'
            }
        ]
    };
    module.controller('SidebarController', SidebarController)
}());