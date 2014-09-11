angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope) {
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
        })

        .controller('AccountCtrl', function($scope) {
        });
