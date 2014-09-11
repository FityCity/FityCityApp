/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.loginService', [])
        .factory('LoginService', function() {
            var self = {}
            self.login = function(event) {
                var target = event.target;
                if (target.name == "facebook-login") {
                    if (!window.cordova) {
                        var appId = prompt("Enter FB Application ID", "");
                        facebookConnectPlugin.browserInit(appId);
                    }
                    facebookConnectPlugin.login(["email"],
                            function(response) {
                                alert(JSON.stringify(response))
                            },
                            function(response) {
                                alert(JSON.stringify(response))
                            });
                }
                else if(target.name=="google-login"){
                    console.log("google")
                }
                else if(target.name=="twitter-login"){
                    console.log("twitter")
                }
                
            }



            return self;
        })
