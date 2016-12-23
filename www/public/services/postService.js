angular.module('budjetz').service('postService', function($state, getService, $q, $http) {

  this.addExpenditure = (ex) => {
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


});
