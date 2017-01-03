angular.module('budjetz').controller('settingsCtrl', function($scope, $ionicModal, $stateParams, postService) {

  // $ionicModal.fromTemplateUrl('incomeModal.html', {
  //   scope: $scope,
  //   animation: 'slide-in-up',
  //   id: '3'
  // }).then(function(modal) {
  //   $scope.modal3 = modal;
  // });

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
  }

  $scope.getSpecificExpenditure = (cat) => {
    postService.getSpecificExpenditure(cat).then((res) => {
      $scope.specificExpenditures = res.data;
      console.log(res.data);
    })
  }

})
