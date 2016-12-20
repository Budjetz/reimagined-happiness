angular.module('budjetz', ['ui.router', 'ionic']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: "./public/home/home.html",
      params: {
        data: null
      }
    })
    .state('welcome', {
      url: '/welcome',
      templateUrl: "./public/welcome/welcomeSlides.html"
    })

});
