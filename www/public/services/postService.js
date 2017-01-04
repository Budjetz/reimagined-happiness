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
  this.editBudget = (bud) => {
    return $http({
      method: 'POST',
      url: '/editBudget',
      data : {
        category: bud.category,
        newAmount: bud.budget_amount
      }
    })
  }
  this.deleteBudget = (cat) => {
    if(cat == null){
      return $http({
        method: 'POST',
        url: '/deleteBudget',
        data : {
          category: '',
        }
      })
    } else {
      return $http({
        method: 'POST',
        url: '/deleteBudget',
        data : {
          category: cat,
        }
      })
    }
  }
  this.addBudget = (bud) => {
    return $http({
      method: 'POST',
      url: '/addBudget',
      body: {
        category: bud.category,
        budget_amount: bud.budget_amount
      }
    })
  }

});
