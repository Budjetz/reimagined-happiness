angular.module('budjetz').controller('homeCtrl', function ($scope, pieChart, barChart) {

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }

      $scope.setPieChart = function(){
        var data = pieChart.setData();
        console.log(data);
        if(data){pieChart.makePieChart(data);}
      };

  });
