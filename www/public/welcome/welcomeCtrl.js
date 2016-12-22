angular.module('budjetz').controller('welcomeCtrl', function($scope, barChart, pieChart, dataService) {

  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 500,
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    // note: the indexes are 0-based
    $scope.activeIndex = data.slider.activeIndex;
    $scope.previousIndex = data.slider.previousIndex;
  });

  $scope.setPieChart = function(stuff){
    var data = dataService.setData(stuff);
    if(data){
      pieChart.makePieChart(data);
      barChart.makeBarChart();
    }

  };



});
