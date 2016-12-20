angular.module('budjetz').controller('homeCtrl', function ($scope, $timeout, $mdSidenav) {

    console.log('home working');

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
  });
