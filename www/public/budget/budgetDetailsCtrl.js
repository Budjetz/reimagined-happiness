angular.module('budjetz').controller('budgetDetailsCtrl', function($scope, $stateParams, postService) {

  $scope.budget = $stateParams.id;

  $scope.getSpecificExpenditure = (cat) => {
    postService.getSpecificExpenditure(cat).then((res) => {
      $scope.specificExpenditures = res.data;
    })
  }
  $scope.getSpecificExpenditure($scope.budget);

  $scope.editExpenditure = (ex) => {
    postService.editExpenditure(ex).then((res) => {
      console.log('edited', res);
    })
  }
  $scope.deleteExpenditure = (ex) => {
    postService.deleteExpenditure(ex).then((res) => {
      console.log('gone', res);
    })
  }
})
