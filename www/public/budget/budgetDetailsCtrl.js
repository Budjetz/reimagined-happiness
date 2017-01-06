angular.module('budjetz').controller('budgetDetailsCtrl', function($scope, $stateParams, $ionicPopup, postService, getService, pieChart, barChart) {
  $scope.budget = $stateParams.id;
  $scope.getSpecificExpenditure = (cat) => {
    postService.getSpecificExpenditure(cat).then((res) => {
      $scope.specificExpenditures = res.data;
    })
  }
  $scope.getSpecificExpenditure($scope.budget);
  $scope.editExpenditure = (ex) => {
    postService.editExpenditure(ex).then((res) => {
      $scope.getSpecificExpenditure($scope.budget);
    })
  }
  $scope.deleteExpenditure = (ex) => {
    postService.deleteExpenditure(ex).then((res) => {
      $scope.getSpecificExpenditure($scope.budget);
    })
  }
  $scope.confirmDeletion = (ex) => {
    $scope.ex = ex;
    var confirmPopup = $ionicPopup.confirm({
      title: 'Delete Expense?',
      template: 'Are you sure you want to delete this transaction?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
        $scope.deleteExpenditure(ex);
      } else {
        console.log('You are not sure');
      }
    });
  }
  $scope.showEditor = (ex) => {
    $scope.ex = ex;
    var addPopup = $ionicPopup.show({
      template:
      ' <input type="text" placeholder="location" ng-model="ex.location"> <input type="text" placeholder="amount" ng-model="ex.amount"> <input type="text" placeholder="notes" ng-model="ex.notes">',
      title: 'Edit Expenditure',
      scope: $scope,
      buttons: [
        {text: 'Cancel'},
        {
          text: '<div>Save</div>',
          type: 'button-positive',
          onTap: function(e){
              $scope.editExpenditure($scope.ex);
          }
        }
      ]
    });
  }
  $scope.setPieChart = function(){
    getService.getBudgetExpenditures().then((data) => {
      barChart.makeBarChart(data.data);
      barChart.makeSavingsBar();
      pieChart.makePieChart(data.data);
    })
  };
  $scope.$on('$ionicView.enter', function() {
    $scope.getSpecificExpenditure($scope.budget);
  })

})
