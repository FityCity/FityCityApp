angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

    // $scope.afterlogin = function() {
    //    $location.path("/tab/dash")
    // }
     $scope.fakeLogin = function(){
              console.log("login")
              $location.path('/tab/vendors')
            }


});

app.controller('AccountCtrl', function($scope,TokenService,FacebookService) {
    $scope.token=TokenService.getToken();
    $scope.getUserProfile=FacebookService.getUserProfile;
	$scope.vendors = Vendors.all();
});
// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('VendorsCtrl', function($scope, Vendors) {
  $scope.vendors = Vendors.all();
})

//.controller('AccountCtrl', function($scope, Vendors) {
	// $scope.vendorPoints = VendorPoints.all();
//	$scope.vendors = Vendors.all();
//})

.controller('VendorDetailCtrl', function($scope, $stateParams, Vendors, Activities, ActivityOthers) {
  $scope.vendor = Vendors.get($stateParams.vendorId);
  $scope.activity = Activities.get($stateParams.activityId);
  $scope.otherscards = ActivityOthers.all();
  $scope.cards = Activities.all();
});

// //new by yiwei
// .controller('ActivityDetailCtrl', function($scope, $stateParams, Activities, ActivityOthers) {
//   $scope.activity = Activities.get($stateParams.activitiesId);

//   $scope.otherscards = ActivityOthers.all();
//   console.log($scope.otherscards)
//   });
