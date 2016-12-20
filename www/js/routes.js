angular.module('budjetz', ['ui.router', 'ionic']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: "./public/welcome/welcomeSlides.html"
    })
    .state('home', {
      url: '/home',
      templateUrl: "./public/home/home.html"
    })

});
