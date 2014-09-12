angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, PushProcessingService) {
  $scope.regId = PushProcessingService.getId();
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('VendorsCtrl', function($scope, Vendors) {
  $scope.vendors = Vendors.all();
})

.controller('VendorDetailCtrl', function($scope, $stateParams, Vendors, Activities) {
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

})

.controller('AccountCtrl', function($scope) {
});
