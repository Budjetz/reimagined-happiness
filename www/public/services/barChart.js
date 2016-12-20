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

      var body = d3.select('div');

      var goodies = body.selectAll('.div')
      .data(data);

      goodies.enter().append('div')
      .attr('class', 'div')
      .style('width', function(d) { return '0%'})
      .style('background','green')
      .style('margin','5px')
      .html(function(d) {return d;});

      goodies.transition()
      .style('width', function(d) { return d + '%'})
      .text(d3.format());

      goodies.exit().remove();


    }

});
