angular.module('budjetz').service('barChart', function() {

  this.makeBarChart = function() {
      var dataSet = false;
      var data = []
      var start = document.getElementById('startingMoney');
      var payCheck = document.getElementById('monthlyPayCheck');
      var gasBudget = document.getElementById('gasBudget');
      var rentBudget = document.getElementById('rentBudget')
      data = [
        start.value, payCheck.value,
        gasBudget.value,
        rentBudget.value
      ];

      var body = d3.select('.barGraph')
      .selectAll('.barChart');

      var goodies = body.data(data)
      .enter().append('div')
      .attr('class', 'barChart')
      .style('width', function(d) { return '100%'})
      .style('background','red')
      .style('margin','5px')
      .append('div')
      .style('background','green')
      .html(function(d) {return d;})
      .transition()
      .style('width', function(d) { return d + '%'})
      .text(d3.format());

      console.log(goodies , 'good');



    }

});
