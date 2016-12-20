angular.module('budjetz', ['ui.router', 'ionic', 'ngMaterial']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: "./public/welcome/welcomeSlides.html"
    })
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "./public/menu/menu.html",
      controller: "menuCtrl"
    })
          .state('app.home', {
            url: '/home',
            views: {
              'menuContent' :{
                templateUrl: "./public/home/home.html",
                controller: "homeCtrl"
              }
            }
          })
          .state('app.settings', {
            url: '/settings',
            views: {
              'menuContent' :{
                templateUrl: "./public/settings/settings.html"
              }
            }
          })
          .state('app.other', {
            url: '/other',
            views: {
              'menuContent' :{
                templateUrl: "./public/other/other.html"
              }
            }
          })

    $urlRouterProvider.otherwise('/login');
});
