angular.module('budjetz')
.controller('menuCtrl', function($state , $scope, $ionicModal, postService, getService, barChart, pieChart, $ionicPopup) {

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
  $ionicModal.fromTemplateUrl('chooseCategoryModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    id: '5'
    }).then(function(modal) {
    $scope.modal5 = modal;
  });
  $ionicModal.fromTemplateUrl('chooseCategoryModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    id: '6'
    }).then(function(modal) {
    $scope.modal6 = modal;
  });
  $scope.openModal = function(index) {
    if (index == 1) {
      $scope.modal1.show();
    }
    else if (index == 2) {
      $scope.modal2.show();
    }
    else if (index == 5) {
      $scope.modal5.show();
    }
    else {
      $scope.modal6.show();
    }
  };
  $scope.closeModal = function(index) {
    if (index == 1) {
      $scope.modal1.hide();
    }
    else if (index == 2) {
      $scope.modal2.hide();
    }
    else if (index == 5) {
      $scope.modal5.hide();
    }
    else {
      $scope.modal6.hide();
    }
  };
  $scope.addExpenditure = (ex) => {
    postService.addExpenditure(ex).then((data)=>{
        getService.getBudgetExpenditures().then((data) => {
          barChart.makeBarChart(data.data);
          pieChart.makePieChart(data.data);
          console.log(data.data);
        })
    })
  }
  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Your Expense has been added',
      template: 'Would you like to add another one?',
      buttons: [
        {
          text: 'YES',
          onTap: function() {
            console.log("You clicked YES");
            // $state.go('app.home');
          }
      },
        {
          text: 'NO',
          onTap: function() {
            console.log("You clicked NO");
            $scope.closeModal(1);
          }
        }
      ]
    });
  };
  $scope.showCreditConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Your Credit has been added',
      template: 'Would you like to add another one?',
      buttons: [
        {
          text: 'YES',
          onTap: function() {
            console.log("You clicked YES");
            // $state.go('app.home');
          }
      },
        {
          text: 'NO',
          onTap: function() {
            console.log("You clicked NO");
            $scope.closeModal(2);
          }
        }
      ]
    });

  };
  $scope.getBudgets = () => {
    getService.getBudgets().then((res)=>{
      $scope.budgets = res.data;
      console.log($scope.budgets);
    })
  };
  $scope.getBudgets();
  $scope.setPieChart = () => {
    getService.getBudgetExpenditures().then((data) => {
      barChart.makeBarChart(data.data);
      pieChart.makePieChart(data.data);
    })
  };
  $scope.setCategory = (cat) => {
    console.log(cat);
    $scope.category = cat;
  }


});
