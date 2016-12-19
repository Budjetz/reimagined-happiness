angular.module('budjetz', ['ui.router', 'ionic']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: "./templates/welcome.html"
    })

});
