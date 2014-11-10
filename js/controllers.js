angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location, LoginService) {
    $scope.login = function(event){
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

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();

})

.controller('AccountCtrl', function($scope, Vendors) {
  // $scope.vendorPoints = VendorPoints.all();
  $scope.vendors = Vendors.all();
})

.controller('VendorDetailCtrl', function($scope,$ionicModal, $stateParams, Videos, Vendors, Activities, ActivityOthers,Camera,Tabs) {
  $scope.vendor = Vendors.get($stateParams.vendorId);
  $scope.activity = Activities.get($stateParams.activityId);
  $scope.otherscards = ActivityOthers.all();
  $scope.cards = Activities.all();

  console.log("Hello");

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
//Open the camera to take a video
 $scope.getVideo = function(uri) {
   
    Camera.getVideo().then(
      //get the video Files in URI
      function(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
           alert(mediaFiles[i].fullPath);
           $scope.lastVideo = mediaFiles[i].fullPath;
           alert("d"+$scope.lastVideo);
           Videos.upload($scope.lastVideo);
        }
      },function(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
      },{
      limit:1
    });
    
};

});