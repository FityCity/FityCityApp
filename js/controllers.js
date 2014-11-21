angular.module('starter.controllers', [])

        .controller('LoginCtrl', function($scope, $location, LoginService,FacebookService) {
        // facebookConnectPlugin.getLoginStatus(
        //     function (response) { 
        //         $location.path("/tab/vendors") 
        //     },
        //     function (response) { 
        //     }
        // )    
        $scope.login = function(event) {
            LoginService.login(event)
        }
        })

        .controller('DashCtrl', function($scope) {
            
        })

        .controller('TabCtrl', function($scope, Tabs) {
            $scope.state = Tabs.getState();
            console.log("TabCtrl loaded");
        })

        .controller('VendorsCtrl', function($scope, Vendors, Tabs, Video) {
            $scope.vendors = Vendors.all();
        })

        .controller('EventsCtrl', function($scope, Events, $ionicSlideBoxDelegate) {
            $scope.events = Events.all();
        })

        //Control the button bar in account page
        .controller('AccountCtrl', function($scope, Vendors, MyActivities,Account) {
            // $scope.vendorPoints = VendorPoints.all();
            this.btn = 1;
            this.selectBtn = function(setBtn) {
                this.btn = setBtn;
            };
            this.isSelected = function(checkBtn) {
                return this.btn == checkBtn;
            };
            $scope.vendors = Vendors.all();
            $scope.myactivities = MyActivities.all();
            $scope.user=Account.get();
        console.log($scope.user);
            $scope.deals = [{name: "10% Off subway",points: 10},{name: "free coffee",points: 20},{name: "save 5 dollar",points: 20}];

        })

        //Update by Viola at 3/11
        .controller('VendorDetailCtrl', function($ionicPopup,$scope, $state, $http, $ionicSlideBoxDelegate, $ionicModal, $stateParams, Vendors, Activities, ActivityOthers, Camera, Tabs, HttpService, Video) {
            // alert("Ok 1")
            $scope.vendor = Vendors.get($stateParams.vendorId);
            console.log("Vendor", $scope.vendor, $stateParams);
            $scope.activity = Activities.get($stateParams.activityId);
            $scope.otherscards = ActivityOthers.all();



            Activities.all(function(activities) {
                $scope.cards = activities;
                $ionicSlideBoxDelegate.update();
            });

            $ionicModal.fromTemplateUrl('templates/popup.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.close = function() {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.popup = function() {
                $scope.modal.show();
            };

            var user_id = "546d3ad8c15071ac158a8580";
            var vendor_id = $stateParams.vendorId;

            var points=0;

            var uploadPoints = function(difficulty){
                switch (difficulty){
                    case "easy":
                        points = 10;
                        break;
                    case "medium":
                        points = 20;
                        break;
                    case "hard":
                        points = 30;
                        break;
                    default:
                }

                HttpService.request(
                {
                    url:"/points",
                    method:'POST',
                    params:{
                        user_id: user_id,
                        vendor_id: $scope.vendor._id,
                        points: points
                    }
                },
                function(data,status){
                    if(status==200){
                        console.log("points sent ok");
                        $ionicPopup.alert(
                            {
                                title: "Upload succeeded",
                                subTitle:  "You get "+points+"points!"
                            }
                        );
                        }else{
                        $ionicPopup.alert(
                            {
                                title: "Upload failed"
                            }   
                        );
                        console.log("points sent fail, "+status);
                    }
                }
                );
            }

            var onSuccess = function(msg){
                console.log("uploadVideo ok, "+msg);
                console.log("activity");
                uploadPoints("easy");
            }

            var onError = function(msg){
                console.log("uploadVideo fail, "+msg);
            }

           //Open the camera to take a video
            $scope.getVideo = function(activity_id) {

                Camera.getVideo().then(
                    //get the video Files in URI
                    function(mediaFiles) {
                        var i, len;
                        for (i = 0, len = mediaFiles.length; i < len; i += 1) {

                            var metaData = {
                                user_id: user_id,
                                vendor_id: $stateParams.vendorId,
                                activity_id: activity_id
                            };

                            Video.upload(mediaFiles[0].fullPath,metaData,onSuccess,onError);
                            $state.go('tab.account');
                        }
                    }, function(error) {
                    var msg = 'An error occurred during capture: ' + error.code;
                    navigator.notification.alert(msg, null, 'Uh oh!');
                    }, {
                        limit: 1,
                        duration: 1000
                });
            };

            // alert("Ok 3");

        });
