(function() {
    'use strict';

    angular.module('starter')

    .controller('chatController', chatController);

    function chatController($scope,$stateParams, $localStorage, $rootScope, $state, parseService, homeService, fireBaseService, chatService) {
        $scope.chatUserId = $stateParams.userId;
        $scope.userId = homeService.get('user_id');
        chatService.createGroupChat($scope.userId,$scope.chatUserId);
        var myDataRef = fireBaseService.fireBaseIntialize();
        fireBaseService.Initial(myDataRef);
        $scope.send = function() {
            var myDataRef = fireBaseService.fireBaseIntialize();
            fireBaseService.fireBasePush($scope.myDataRef, $localStorage.user_name, this.msg);
        };
    }
})();