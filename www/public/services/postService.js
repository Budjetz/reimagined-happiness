angular.module('budjetz').service('postService', function($state, getService, $q, $http) {

  this.addExpenditure = (ex) => {
    var newCat = ex.category.toLowerCase();
    newCat = newCat.charAt(0).toUpperCase() + newCat.slice(1);
    return $http({
      method: 'POST',
      url: '/addExpenditure',
      data: {
        user_id: 3,
        category: newCat,
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
  this.editBudget = (bud, category) => {
    return $http({
      method: 'POST',
      url: '/editBudget',
      data : {
        category: category,
        newCategory: bud.category,
        newAmount: bud.amount
      }
    })
  }
  this.deleteBudget = (cat) => {
    if(!cat){
      return $http({
        method: 'POST',
        url: '/deleteEmptyBudget',
        data : {
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
    var newCat = bud.category.toLowerCase();
    newCat = newCat.charAt(0).toUpperCase() + newCat.slice(1);
    return $http({
      method: 'POST',
      url: '/addBudget',
      data: {
        category: newCat,
        budget_amount: bud.amount
      }
    })
  }
  this.editExpenditure = (ex) => {
    return $http({
      method : 'POST',
      url: '/editExpenditure',
      data: {
        category: ex.category,
        amount: ex.amount,
        notes: ex.notes,
        location: ex.location,
        date: ex.date
      }
    })
  }
  this.deleteExpenditure = (ex) => {
    return $http({
      method : 'POST',
      url: '/deleteExpenditure',
      data: {
        category: ex.category,
        amount: ex.amount,
        date: ex.date
      }
    })
  }
});
