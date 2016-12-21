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
          .state('app.goals', {
            url: '/goals',
            views: {
              'menuContent' :{
                templateUrl: "./public/goals/goals.html"
              }
            }
          })

    $urlRouterProvider.otherwise('/login');
});
