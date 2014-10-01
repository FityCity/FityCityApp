app = angular.module('starter.controllers', []);

app.controller('DashCtrl', function($scope) {
// })

    // $scope.afterlogin = function() {
    //    $location.path("/tab/dash")
    // }
    $scope.fakeLogin = function(){
      console.log("login")
      $location.path('/tab/vendors')
    }
});

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
	$scope.vendors = Vendors.all();
});

app.controller('VendorsCtrl', function($scope, Vendors) {
  $scope.vendors = Vendors.all();
})

//.controller('AccountCtrl', function($scope, Vendors) {
	// $scope.vendorPoints = VendorPoints.all();
//	$scope.vendors = Vendors.all();
//})

app.controller('VendorDetailCtrl', function($scope, $stateParams, Vendors, Activities, ActivityOthers) {
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
