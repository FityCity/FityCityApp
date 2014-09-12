var app = angular.module('starter.controllers', []);

// LOGIN CONTROLLERS
app.controller('LoginCtrl', function($scope, $location, LoginService,TokenService) {
    $scope.login = LoginService.login;
    $scope.mousedown = LoginService.mousedown;
    $scope.mouseup = LoginService.mouseup;

    // $scope.afterlogin = function() {
    //    $location.path("/tab/dash")
    // }

});

app.controller('AccountCtrl', function($scope,TokenService,FacebookService) {
    $scope.token=TokenService.getToken();
    $scope.getUserProfile=FacebookService.getUserProfile;
});


// TAB CONTROLLERS
        
app.controller('DashCtrl', function($scope) {});

app.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
});

app.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
});

app.controller('VendorsCtrl', function($scope, Vendors) {
    $scope.vendors = Vendors.all();
});

app.controller('VendorDetailCtrl', function($scope, $stateParams, Vendors, Activities) {
  $scope.vendor = Vendors.get($stateParams.vendorId);
  $scope.cards = Activities.all();
  $scope.photo = "";
  $scope.takePicture = function() {
  navigator.camera.getPicture(function(imageURI) {

        // imageURI is the URL of the image that we can use for
        // an <img> element or backgroundImage.
        $scope.photo = imageURI;

      }, function(err) {

        // Ruh-roh, something bad happened

      }, cameraOptions);
    }

});


