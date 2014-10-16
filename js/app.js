// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.contrib.ui.cards'])
//
        .config(function($compileProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        })

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                    // setup an abstract state for the tabs directive
                    .state('login', {
                        url: '/login',
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    })

                    .state('tab', {
                        url: "/tab",
                        abstract: true,
                        templateUrl: "templates/tabs.html"
                    })

                    .state('tab.vendors', {
                        url: '/vendors',
                        views: {
                            'tab-vendors': {
                                templateUrl: 'templates/tab-vendors.html',
                                controller: 'VendorsCtrl'
                            }
                        }
                    })
                    .state('tab.vendors-detail', {
                        url: '/vendor/:vendorId',
                        views: {
                            'tab-vendors': {
                                templateUrl: 'templates/vendor-detail.html',
                                controller: 'VendorDetailCtrl'
                            }
                        }
                    })

                    .state('tab.othersdoingit', {
                        url: '/vendor/:vendorId/:activityId',
                        views: {
                            'tab-vendors': {
                                templateUrl: 'templates/othersdoingit.html',
                                controller: 'VendorDetailCtrl'
                            }
                        }
                    })

                    .state('tab.account', {
                        url: '/account',
                        views: {
                            'tab-account': {
                                templateUrl: 'templates/tab-account.html',
                                controller: 'AccountCtrl'
                            }
                        }
                    })

                    .state('tab.events', {
                        url: '/events',
                        views: {
                            'tab-events': {
                                templateUrl: 'templates/tab-events.html',
                                controller: 'EventsCtrl'
                            }
                        }
                    })

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');

        });

