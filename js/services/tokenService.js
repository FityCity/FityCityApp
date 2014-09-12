/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.services.token', [])
        .factory('TokenService', function() {
            var token="testToken";
            return{
                getToken:function(){
                    return token;
                },
                setToken:function(new_token){
                    token=new_token;
                }
            }
        })