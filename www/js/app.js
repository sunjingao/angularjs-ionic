// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in homeCtrol.js
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in homeCtrol.js
        $stateProvider

        // Each tab has its own nav history stack:

            .state('home', {
                url: '/home',
                cache: 'false',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrol',
                controllerAs: 'vm'

            })

            .state('pay', {
                url: '/pay',
                cache: 'false',
                templateUrl: 'templates/pay.html',
                controller: 'payController',
                controllerAs: 'vm'
            })
            .state('history', {
                url: '/history',
                cache: false,
                templateUrl: 'templates/history.html',
                controller: 'historyController',
                controllerAs: 'vm'
            })
            .state('result', {
                url: '/result',
                cache: 'false',
                templateUrl: 'templates/result.html',
                controller: 'resultController',
                controllerAs: 'vm'
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');

    });
