angular.module('budjetz').service('postService', function($state, getService, $q, $http) {

  this.addExpenditure = (ex) => {
    // var newCat = ex.category.toLowerCase();
    // newCat = newCat.charAt(0).toUpperCase() + newCat.slice(1);
    // console.log(newCat,'fun');
    return $http({
      method: 'POST',
      url: '/addExpenditure',
      data: {
        user_id: 3,
        category: ex.category,
        amount: ex.amount,
        date: new Date(),
        notes: ex.notes,
        location: ex.location
      }
    })
  }
  this.getSpecificExpenditure = (cat) => {
    return $http({
      method: 'POST',
      url: '/getSpecificExpenditure',
      data: {
        category: cat
      }
    })
  }


});
