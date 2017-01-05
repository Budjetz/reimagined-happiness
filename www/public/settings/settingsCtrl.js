angular.module('budjetz').controller('settingsCtrl', function($scope, $ionicModal, $stateParams, getService, postService, $ionicPopup) {

  $ionicModal.fromTemplateUrl('categoryModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    id: '4'
  }).then(function(modal) {
    $scope.modal4 = modal;
  });

  $scope.openModal = function(index) {
    if (index == 3) $scope.modal3.show();
     else $scope.modal4.show();
  };
  $scope.closeModal = function(index) {
    if (index == 3) $scope.modal3.hide();
    else $scope.modal4.hide();
  };

  $scope.getBudgets = () => {
    getService.getBudgets().then((res)=>{
      $scope.budgets = res.data;
    });
  };
  $scope.getBudgets();

  $scope.getSpecificExpenditure = (cat) => {
    postService.getSpecificExpenditure(cat).then((res) => {
      $scope.specificExpenditures = res.data;
    });
  };

  $scope.deleteBudget = (bud) => {
    postService.deleteBudget(bud).then( (res) => {
      $scope.getBudgets();
    });
  };

  $scope.showAdder = () => {
    $scope.bud = {};
    $scope.count = 0;
    var addPopup = $ionicPopup.show({
      template:
      ' <input type="text" placeholder="Category Name" ng-model="bud.category"> <input type="text" placeholder="Budget Amount" ng-model="bud.amount">',
      title: 'Enter Buget Info',
      scope: $scope,
      buttons: [
        {text: 'Cancel'},
        {
          text: '<div>Save</div>',
          type: 'button-positive',
          onTap: function(e){
            $scope.count++;
            if($scope.bud.category && $scope.bud.amount && $scope.count == 1){
              postService.addBudget($scope.bud).then( ()=>{
                $scope.getBudgets();
                $scope.count = 0;
              });
            }
          }
        }
      ]
    });
  };

  $scope.showConfirm = function(budget) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Delete ' + budget.category + "?",
      template: 'Are you sure you want to delete the ' + budget.category + " category?"
    });

    confirmPopup.then(function(res) {
      if(res) {
        // console.log('You are sure');
        $scope.deleteBudget(budget.category);
      } else {
        // console.log('You are not sure');
      }
    });
  };

  $scope.confirmEditBudget = function(budget) {
    var addPopup = $ionicPopup.show({
      template:
      '<input type="text" placeholder="' + budget.category + '" ng-model="bud.category"></input><input type="text" placeholder="' + budget.budget_amount + '" ng-model="bud.amount">',
      title: 'Edit Budget Info',
      scope: $scope,
      cssClass: 'confirm-edit-popup',
      buttons: [
        {text: 'Cancel'},
        {
          text: '<div>Save</div>',
          type: 'button-positive',
          onTap: function(e){
            if($scope.bud.category && $scope.bud.amount ==1) {
              postService.editBudget(bud).then( (res) => {
                $scope.getBudgets();
              });
            }
          }
        }
      ]
    });
  };
});
