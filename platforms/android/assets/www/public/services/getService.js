angular.module('budjetz').service('getService', function ($http){

  this.getBudgets = () => {
    return $http({
      method: "GET",
      url: '/getBudgets'
    }).then((res)=>{return res})
  }
  this.getExpenditures = () => {
    return $http({
      method: "GET",
      url: '/getExpenditures'
    })
  }
  this.getUsers = () => {
    return $http({
      method: "GET",
      url: '/getUsers'
    })
  }
  this.getMoneyTotal = () => {
    return $http({
      method: "GET",
      url: '/getMoneyTotal'
    })
  }
  this.getBudgetExpenditures = () => {
    return $http({
      method: "GET",
      url: '/getBudgetExpenditures'
    })
  }



})
