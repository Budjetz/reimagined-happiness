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

  });
  www/public/menu/menu.html  www/public/services/barChart.js www/public/services/pieChart.js www/public/welcome/welcomeCtrl.js www/public/welcome/welcomeSlides.html
