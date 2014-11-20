angular.module('starter.controllers', [])

        .controller('LoginCtrl', function($scope, $location, LoginService) {
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
            Video.hello();
        })

        .controller('EventsCtrl', function($scope, Events, $ionicSlideBoxDelegate) {
            $scope.events = Events.all();
        })

        //Control the button bar in account page
        .controller('AccountCtrl', function($scope, Vendors, MyActivities) {
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

                            Video.upload(mediaFiles[0].fullPath, metaData);
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
