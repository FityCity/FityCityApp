angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('VendorsCtrl', function($scope, Vendors) {
  $scope.vendors = Vendors.all();
})

.controller('AccountCtrl', function($scope, Vendors) {
	// $scope.vendorPoints = VendorPoints.all();
	$scope.vendors = Vendors.all();
})

.controller('VendorDetailCtrl', function($scope,$ionicModal, $stateParams, Vendors, Activities, ActivityOthers) {
  $scope.vendor = Vendors.get($stateParams.vendorId);
  $scope.activity = Activities.get($stateParams.activityId);
  $scope.otherscards = ActivityOthers.all();
  $scope.cards = Activities.all();

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


});

// //new by yiwei
// .controller('ActivityDetailCtrl', function($scope, $stateParams, Activities, ActivityOthers) {
//   $scope.activity = Activities.get($stateParams.activitiesId);
  
//   $scope.otherscards = ActivityOthers.all();
//   console.log($scope.otherscards)
//   });