
angular.module('starter', ['ionic', 'ngCordova'])

.service('imagesService', function ($http) {
  this.storeImage = function (imageData, fileName) {
    var imageExtension = imageData.split(';')[0].split('/');
    imageExtension = imageExtension[imageExtension.length - 1];

    var newImage = {
      imageName: fileName,
      imageBody: imageData,
      imageExtension: imageExtension,
    }
    console.log(newImage);
    // return $http.post('/api/newimage', newImage)
  };
  this.getImage = function (){
    return $http({
      method:"GET",
      url: '/getImage'
    }).then((res)=>{
    // console.log(res.data[0].url);
    return res.data;
    })
  }

})

.directive('fileread', function($http) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {
          console.log(loadEvent)
          var fileread = loadEvent.target.result;
          console.log(elem);

          var fileName = elem[0].files[0].name;
          var fileType = elem[0].files[0].type;
          console.log(fileName, fileType);
          $http.post('/api/camera', {fileread, fileName, fileType})
          .then(function (result) {
            console.log(result.data);
          })
          .catch(function (err) {
            console.error(err);
          });
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
})

.controller("ExampleController", function($scope, $cordovaCamera, imagesService) {

  $scope.getImage = () => {
    imagesService.getImage().then((res)=>{
      console.log(res[0].url);
      $scope.currentImage = res[0].url;
    })
  };


})
    // $scope.takePicture = function() {
    //     var options = {
    //         quality : 100,
    //         destinationType : Camera.DestinationType.DATA_URL,
    //         sourceType : Camera.PictureSourceType.CAMERA,
    //         allowEdit : true,
    //         encodingType: Camera.EncodingType.JPEG,
    //         targetWidth: 300,
    //         targetHeight: 300,
    //         popoverOptions: CameraPopoverOptions,
    //         saveToPhotoAlbum: false
    //     };
    //
    //     $cordovaCamera.getPicture(options).then(function(imageData) {
    //         $scope.imgURI = "data:image/jpeg;base64," + imageData;
    //     }, function(err) {
    //         // An error occured. Show a message to the user
    //     });
    // };
// })











// angular.module('starter', ['ionic','ngCordova'])
//
// .controller('CaptureCtrl', function($scope, $ionicActionSheet, $ionicLoading, $ionicPlatform, $cordovaCamera, $cordovaFile, $window) {
//
//   $scope.returnToMainApp = function() {
//       $window.location.href = "http://localhost:8080/#/app/home"
//     }
//   })




// KEYBOARD, IONIC:

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



// ---- ---- -------- ---------- ----- ----

// OCR CAMERA; COMMENTED OUT FOR NOW DUE TO ISSUES:

// .controller('CaptureCtrl', function($scope, $ionicActionSheet, $ionicLoading, $ionicPlatform, $cordovaCamera, $cordovaFile, $window) {
//
//   $ionicPlatform.ready(function() {
//
//     $scope.showAnalyzeButton = false;
//
//     var self = this;
//
//     this.showLoading = function() {
//       $ionicLoading.show({
//         template: '<ion-spinner></ion-spinner>'
//       });
//     };
//
//     this.hideLoading = function(){
//       $ionicLoading.hide();
//     };
//
//     this.getPicture = function(index){
//
//       var sourceType = index === 0 ? Camera.PictureSourceType.PHOTOLIBRARY : Camera.PictureSourceType.CAMERA;
//       var options = {
//         quality: 100,
//         destinationType: Camera.DestinationType.DATA_URL,
//         sourceType: sourceType,
//         allowEdit: true,
//         encodingType: Camera.EncodingType.JPEG,
//         popoverOptions: CameraPopoverOptions,
//         saveToPhotoAlbum: false,
//         correctOrientation:true
//       };
//
//       $cordovaCamera.getPicture(options).then(function(imageData) {
//         var image = document.getElementById('pic');
//         image.src = "data:image/jpeg;base64," + imageData;
//         $scope.showAnalyzeButton = true;
//       }, function(err) {
//           console.log(err);
//       });
//
//     };
//
//   });
//
//   $scope.showActionSheet = function(){
//     var hideSheet = $ionicActionSheet.show({
//       buttons: [
//        { text: 'Choose Photo' },
//        { text: 'Take Photo' }
//       ],
//       cancelText: 'Cancel',
//       cancel: function() {
//         console.log('cancel');
//       },
//       buttonClicked: function(index) {
//         getPicture(index);
//        return true;
//       }
//     });
//   };
//
//   $scope.showActionSheet();
//
//   $scope.testOcrad = function(){
//     self.showLoading();
//     OCRAD(document.getElementById("pic"), function(text){
//       self.hideLoading();
//       console.log(text);
//       alert(text);
//     });
//   } ;
//
//   $scope.returnToMainApp = function() {
//     $window.location.href = "http://localhost:8080/#/app/home"
//   }
//
// });
