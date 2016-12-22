angular.module('budjetz').service('barChart', function($state) {

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

      if(d3.select('.barChart')[0]){
        d3.selectAll('.barChart').remove();
      }

      var body = d3.select('.barGraph')
      .selectAll('.barChart');

      var goodies = body.data(data)
      .enter().append('div')
      .attr('class', 'barChart')
      .on('click',function(d){ $state.go('welcome')})
      .style('width', '99%')
      .style('display', 'flex')
      .style('justify-content', 'space-between')
      .style('margin','10px')
      .html(function(d) {if(d>0){return '<div style="background: gold; width: 100%; border-radius: 10px"> <div style="background:green; padding-left: 5px; border-radius: 10px; width:'+d+'%">'+d+'</div> </div>';} else {return '<div style="background: gold; width: 100%; border-radius: 10px"> </div>';}});


      goodies.append('div')
      .html(function(d) {return d;})
      .transition()
      .delay(400)
      .style('padding','auto')
      .style('width', '10%')
      .text(d3.format());

      console.log('bar made');

    }

});
