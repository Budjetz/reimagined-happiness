angular.module('budjetz').controller('budgetDetailsCtrl', function($scope, $stateParams, $ionicPopup, postService) {

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
      $scope.getSpecificExpenditure($scope.budget);
    })
  }
  $scope.deleteExpenditure = (ex) => {
    postService.deleteExpenditure(ex).then((res) => {
      console.log('gone', res);
      $scope.getSpecificExpenditure($scope.budget);
    })
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



})
