angular.module('budjetz').controller('homeCtrl', function ($scope, pieChart, dataService, barChart, getService) {


    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }

      $scope.setPieChart = function(){
        getService.getBudgetExpenditures().then((data) => {
          barChart.makeBarChart(data.data);
          pieChart.makePieChart(data.data);
        })
      };
      $scope.getBudgets = () => {
        getService.getBudgets().then((res)=>{
          console.log(res.data);
        })
      }
      $scope.getExpenditures = () => {
        getService.getExpenditures().then((res)=>{
          console.log(res.data);
        })
      }
      $scope.getUsers = () => {
        getService.getUsers().then((res)=>{
          console.log(res.data);
        })
      }
      $scope.getMoneyTotal = () => {
        getService.getMoneyTotal().then((res)=>{
          console.log(res.data);
        })
      }
      $scope.getBudgetExpenditures = () => {
        getService.getBudgetExpenditures().then((res)=>{
          console.log(res.data);
        })
      }

      barChart.makeSavingsBar();

  });
