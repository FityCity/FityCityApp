/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('starter.services.facebook', [])
        .factory('FacebookService', function() {
            
            return{
                getUserProfile:function(){
                    facebookConnectPlugin.api( "/me", ["public_profile","user_birthday"],
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) }); 
                }
                
            }
        })