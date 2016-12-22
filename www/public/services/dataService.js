angular.module('budjetz').service('dataService', function($state) {

function ChartData(value,label){
    this.value = value;
    this.label = label;
  };

  this.setData = function(){

    if(document.getElementById('startingMoney')){
      var start = new ChartData(document.getElementById('startingMoney').value, 'Starting Money' );
      var payCheck = new ChartData(document.getElementById('monthlyPayCheck').value, 'Pay check');
      var gasBudget = new ChartData(document.getElementById('gasBudget').value, 'Gas');
      var rentBudget = new ChartData(document.getElementById('rentBudget').value, 'Rent');

      var data = [start, payCheck, gasBudget, rentBudget]
      return data;
    }
  };
})
