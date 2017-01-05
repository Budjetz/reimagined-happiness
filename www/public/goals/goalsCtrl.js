angular.module('budjetz')

.controller('goalsCtrl', function($scope, $window) {
    console.log("Hello")
    // $window.location.href = 'http://google.com/';
})

// .controller('goalsCtrl', function($scope, $cordovaCamera, $cordovaFile, $ionicPlatform, $ionicActionSheet, ImageService, FileService, $window) {
//  // ImageController
//  // $cordovaEmailComposer, $cordovaDevice,
//      console.log("Hello");
//
//   $ionicPlatform.ready(function() {
//
//     $scope.images = FileService.images();
//     $scope.$apply();
//   });
//
//   // $scope.urlForImage = function(imageName) {
//   //   var trueOrigin = cordova.file.dataDirectory + imageName;
//   //   return trueOrigin;
//   // };
//
//   $scope.addMedia = function() {
//     $scope.hideSheet = $ionicActionSheet.show({
//       buttons: [
//         { text: 'Take photo' },
//         { text: 'Photo from library' }
//       ],
//       titleText: 'Add images',
//       cancelText: 'Cancel',
//       buttonClicked: function(index) {
//         $scope.addImage(index);
//       }
//     });
//   };
//
//   $scope.addImage = function(type) {
//     $scope.hideSheet();
//     ImageService.handleMediaDialog(type).then(function() {
//       $scope.$apply();
//     });
//   };
// });
