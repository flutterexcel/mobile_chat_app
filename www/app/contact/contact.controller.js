(function() {
    'use strict';

    angular.module('starter')

    .controller('contactController', contactController);

    function contactController($scope, $rootScope, $state, $localStorage, $timeout, parseService, homeService, contactService) {
        contactService.statusUser($localStorage.user_email);
        $scope.onTimeout = function() {
            parseService.getUserData($localStorage.user_email).then(function(data) {

                var arr = [];
                arr = JSON.stringify(data);
                var li = JSON.parse(arr);
                var lists = li.reverse();
                $scope.lists = lists;
                $scope.$apply($scope.lists);
                contactService.updateStatus(lists);

            });

            $scope.date = new Date();
            $timeout($scope.onTimeout, 10000);
        }

        $timeout($scope.onTimeout, 1000);
        $scope.chatUser = function(chatUser) {
            $scope.singlechatUser = chatUser;
            $state.go('home.chat');
        }
    }
})();