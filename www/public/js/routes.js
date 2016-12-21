angular.module('budjetz', ['ui.router', 'ionic', 'ngMaterial']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: "./welcome/welcomeSlides.html"
    })
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "./menu/menu.html",
      controller: "menuCtrl"
    })
          .state('app.home', {
            url: '/home',
            views: {
              'menuContent' :{
                templateUrl: "./home/home.html",
              }
            }
          })
          .state('app.settings', {
            url: '/settings',
            views: {
              'menuContent' :{
                templateUrl: "./settings/settings.html"
              }
            }
          })
          .state('app.goals', {
            url: '/goals',
            views: {
              'menuContent' :{
                templateUrl: "./goals/goals.html"
              }
            }
          })

    $urlRouterProvider.otherwise('/login');
});
