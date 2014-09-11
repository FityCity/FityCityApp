/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])
        .controller('LoginCtrl', function($scope, $location,LoginService) {
            $scope.login=LoginService.login;
            $scope.afterlogin = function() {
                $location.path("/tab/dash")
            }

    
})
