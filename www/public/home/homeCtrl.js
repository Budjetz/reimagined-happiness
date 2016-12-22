angular.module('budjetz').controller('homeCtrl', function ($scope, pieChart, dataService, barChart) {


    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }

      $scope.setPieChart = function(){
        if(pieChart){
          var data = dataService.setData();
          if(data){
            pieChart.makePieChart(data);
            barChart.makeBarChart();
          }
        }
      };
      $scope.load = () => {
        $scope.loadCheck = true;
        console.log($scope.loadCheck);
      }
      console.log($scope.loadCheck);
  });
