angular.module('budjetz', ['ui.router', 'ionic', 'ngMaterial']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: "./public/welcome/welcomeSlides.html"
    })
    .state('home', {
      url: '/home',
      templateUrl: "./public/home/home.html",
      controller: "homeCtrl"
    })
        .state('home.settings', {
          url: '/settings',
          templateUrl: "./public/settings/settings.html"
        })
        .state('home.other', {
          url: '/other',
          templateUrl: "./public/other/other.html"
        })

    $urlRouterProvider.otherwise('/home');

});
