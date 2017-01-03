angular.module('budjetz').controller('budgetDetailsCtrl', function($scope, $stateParams, postService) {

  $scope.budget = $stateParams.id;

  $scope.getSpecificExpenditure = (cat) => {
    postService.getSpecificExpenditure(cat).then((res) => {
      $scope.specificExpenditures = res.data;
      console.log(res.data);
    })
  }

  $scope.getSpecificExpenditure($scope.budget);
})
