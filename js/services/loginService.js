/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services.login', [])
        .factory('LoginService', function($location,TokenService) {
            var self = {};
            self.login = function(event){
                var target = event.target;
                if (target.name == "facebook-login") {
                    if (!window.cordova) {
                        console.log("browser init")
                        var appId = prompt("Enter FB Application ID", "");
                        facebookConnectPlugin.browserInit(appId);
                    }
                    facebookConnectPlugin.login(["email","public_profile","user_birthday"],
                            function(response) {
                                alert(JSON.stringify(response))
                                TokenService.setToken(response.authResponse.accessToken)
                            },
                            function(response) {
                                alert("failed")
                                alert(JSON.stringify(response))
                            });
                     $location.path("/tab/dash")
                }
                else if(target.name=="google-login"){
                    console.log("google")
                }
                else if(target.name=="twitter-login"){
                    console.log("twitter")
                }
                
            }

            self.mousedown=function(event){
                var target=event.target;
                if (target.name == "facebook-login"){
                    $(target).attr("src","img/buttons/facebook_login_active.png")
                }
                else if(target.name=="google-login"){
                    $(target).attr("src","img/buttons/google_login_active.png")
                }
                else if(target.name=="twitter-login"){
                    $(target).attr("src","img/buttons/twitter_login_active.png")
                }
                
            }
            
            self.mouseup=function(event){
                var target=event.target;
                if (target.name == "facebook-login"){
                    $(target).attr("src","img/buttons/facebook_login.png")
                }
                else if(target.name=="google-login"){
                    $(target).attr("src","img/buttons/google_login.png")
                }
                else if(target.name=="twitter-login"){
                    $(target).attr("src","img/buttons/twitter_login.png")
                }
            }


            return self;
        })
