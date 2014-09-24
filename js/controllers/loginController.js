/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])
        .controller('LoginCtrl', function($scope, $location, LoginService,TokenService) {
            $scope.login = LoginService.login;
            $scope.mousedown = LoginService.mousedown;
            $scope.mouseup = LoginService.mouseup;
            console.log("test")
            console.log(TokenService.getToken)

            $scope.fakeLogin = function(){
            	console.log("login")
            	$location.path('/tab/dash')
            }

        });
