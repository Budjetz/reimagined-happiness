angular.module('budjetz').controller('menuCtrl', function($state , $scope, $ionicModal, postService, getService, barChart, pieChart, $ionicPopup) {

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
    console.log('ran');
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.addExpenditure = (ex) => {
    postService.addExpenditure(ex).then((data)=>{
        getService.getBudgetExpenditures().then((data) => {
          barChart.makeBarChart(data.data);
          pieChart.makePieChart(data.data);
          console.log(data.data);
        })
    })
  }

})
