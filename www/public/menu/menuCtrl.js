angular.module('budjetz').controller('menuCtrl', function($state, $scope, $ionicModal, postService) {

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.addExpenditure = (ex) => {
    postService.addExpenditure(ex).then((data)=>{
      console.log(data,'expenditure added');
      $scope.ex = '';
      // $scope.modal.hide();
    })

  }

})
