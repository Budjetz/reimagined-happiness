angular.module('budjetz').controller('menuCtrl', function($state , $scope, $ionicModal, postService, getService, barChart, pieChart, $ionicPopup) {

  $ionicModal.fromTemplateUrl('expenseModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    id: '1'
  }).then(function(modal) {
    $scope.modal1 = modal;
  });

  $ionicModal.fromTemplateUrl('creditModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    id: '2'
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $scope.openModal = function(index) {
    if (index == 1) $scope.modal1.show();
     else $scope.modal2.show();
  };
  $scope.closeModal = function(index) {
    if (index == 1) $scope.modal1.hide();
    else $scope.modal2.hide();
  }


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
