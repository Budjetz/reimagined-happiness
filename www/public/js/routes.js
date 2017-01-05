angular.module('budjetz', ['ui.router', 'ionic', 'ngMaterial']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: "./index.html"
    })
    .state('welcome', {
      url: '/welcome',
      templateUrl: "./welcome/welcomeSlides.html"
    })
    .state('setBudget', {
      url: '/setBudget',
      templateUrl: "./welcome/setBudget.html",
      controller: "homeCtrl"
    })
    .state('budget', {
      url: "/budget/:id",
      templateUrl: "./budget/budgetDetails.html",
      controller: 'budgetDetailsCtrl'
    })
    .state('type', {
      url: "/typeOfExpense",
      templateUrl: "./addExpense/typeOfExpense.html",
      controller: "menuCtrl"
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
                templateUrl: "./settings/settings.html",
                controller: "settingsCtrl"
              }
            }
          })
          .state('app.goals', {
            url: '/goals',
            views: {
              'menuContent' :{
                templateUrl: "./goals/goals.html",
                controller: "goalsCtrl",

              }
            }
          })

    $urlRouterProvider.otherwise('/login');
})
