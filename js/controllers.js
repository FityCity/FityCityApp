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

        .controller('VendorsCtrl', function($scope, Vendors, Tabs) {
            $scope.vendors = Vendors.all();
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
        .controller('VendorDetailCtrl', function($ionicPopup,$scope, $ionicSlideBoxDelegate, $ionicModal, $stateParams, Vendors, Activities, ActivityOthers, Camera, Tabs,HttpService) {
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

            
            //uploading video
            var upload = function (videoURI) {
                if(window.hasOwnProperty("FileUploadOptions")){
                    var options = new FileUploadOptions();
                    options.fileKey = "file";
                    //create a unique file name based on the timestamp, use this in the server for time information, or time metadata in the video clip itself.
                    options.fileName = "" + (new Date()).valueOf() + ".mov";
                    options.mimeType = "video/mov";
                    options.httpMethod = "POST";
                    var ft = new FileTransfer();
                    //this is needed to grab the file correctly on IOS
                    videoURI = 'file://' + videoURI;  
                    ft.upload(videoURI, "http://fitecity.herokuapp.com/videos?"+
                        "vendorId="+$scope.vendor._id+
                        "&activityId="+$scope.activity._id, 
                        postSuccess, postFailure, options, true); //boolean is for trustAllHosts
                }
            };

            //upload succeed, get the video           
            var postSuccess = function (response) {
                $ionicPopup.alert({
                    title: "upload succeeded!"
                });
                console.log("upload succeeded");
            };

            var postFailure = function (error) {
                 $ionicPopup.alert({
                    title: "upload failed!"
                 });
                 console.log("upload failed");
            };
              //call the upload function above with the video path on the scope
              // upload($scope.video);
            
            //post video to the s3
            var urlS3;
            var postVideoInfo = function(){
                HttpService.request(
                    {
                        url:"",
                        method: 'POST',
                        params: {
                            vendorId: $scope.vendor._id,
                            activity: $scope.activity._id,
                            //user info here
                            //video time stamp here
                        }
                    },
                    function(data,status){
                        if(status==200){
                            console.log("video info post successful");   
                        }else{
                            console.log("video info post fails");
                        }
                    }
                );
            }
            var postVideo = function(){
                  $http({
                    url: urlS3,
                    method: 'POST',
                    data: {
                        //some video file
                    },
                    headers: {
                        //'Authorization': 'Bearer ' + accessToken,
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    }
                })
                  .success(function(data,status,headers,config){
                    console.log("post video success status: "+status);
                    postVideoInfo();
                })
                  .error(function(data,status,headers,config){
                    console.log("post video error status: "+status);
                });
            }


            //Open the camera to take a video
            $scope.getVideo = function() {

                Camera.getVideo().then(
                    //get the video Files in URI
                    function(mediaFiles) {
                        var i, len;
                        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                            alert(mediaFiles[i].fullPath);
                            $scope.lastVideo = mediaFiles[0].fullPath;
                            alert("d" + $scope.lastVideo);
                            //upload video file with vendor id and activity id
                            //upload($scope.lastVideo);
                            postVideo();
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
