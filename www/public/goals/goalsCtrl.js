angular.module('budjetz')

.controller('goalsCtrl', function($scope, $window, getService) {
    console.log("Hello")
    // $window.location.href = 'http://google.com/';

$scope.getImages = () => {
  getService.getImages().then((res)=>{
  console.log(res.data);
  $scope.images = res.data;
});
}

$scope.getImages();







// ----
//     $scope.items = [
//   {
//     src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
//     sub: 'This is a <b>subtitle</b>'
//   },
//   {
//     src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
//     sub: '' /* Not showed */
//   },
//   {
//     src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg'
//   }
// ];
});

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
