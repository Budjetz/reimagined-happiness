angular.module('budjetz').controller('settingsCtrl', ['$scope', '$ionicModal', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('incomeModal.html', {
        id: '1', // We need to use and ID to identify the modal that is firing the event!
        scope: $scope,
        backdropClickToClose: false,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.oModal1 = modal;
      });

      // Modal 2
      $ionicModal.fromTemplateUrl('categoryModal.html', {
        id: '2', // We need to use and ID to identify the modal that is firing the event!
        scope: $scope,
        backdropClickToClose: false,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.oModal2 = modal;
      });

      $scope.openModal = function(index) {
        if (index == 1) $scope.oModal1.show();
        else $scope.oModal2.show();
      };

      $scope.closeModal = function(index) {
        if (index == 1) $scope.oModal1.hide();
        else $scope.oModal2.hide();
      };

      // Cleanup the modals when we're done with them (i.e: state change)
      // Angular will broadcast a $destroy event just before tearing down a scope
      // and removing the scope from its parent.
      $scope.$on('$destroy', function() {
        // console.log('Destroying modals...');
        $scope.oModal1.remove();
        $scope.oModal2.remove();
      });
    }
  ]);
