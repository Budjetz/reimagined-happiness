angular.module('budjetz').service('barChart', function($state, getService, dataService) {



  this.makeBarChart = function() {

    dataService.budgetData().then((data) => {

    });

      var data = []
      var start = document.getElementById('startingMoney');
      var payCheck = document.getElementById('monthlyPayCheck');
      var gasBudget = document.getElementById('gasBudget');
      var rentBudget = document.getElementById('rentBudget');
      data = [
        {number: start.value,
          name: 'Total'
        },
        {number: payCheck.value,
          name: 'Pay Check'
        },
        {number: gasBudget.value,
          name: 'gas'
        },
        {number: rentBudget.value,
          name: 'rent'
        }
      ];

      if(d3.select('.barChart')[0]){
        d3.selectAll('.barChart').remove();
      }

      var body = d3.select('.barGraph')
      .selectAll('.barChart');

      var goodies = body.data(data)
      .enter().append('div')
      .attr('class', 'barChart')
      .on('click',function(d){ $state.go('budget',{id: d.name})})
      .style('width', '99%')
      .style('display', 'flex')
      .style('justify-content', 'space-between')
      .style('margin','10px')
      .html(function(d) {if(d.number>0){return '<div style="background: gold; width: 100%; border-radius: 10px"> <div style="background:green; padding-left: 5px; border-radius: 10px; width:'+d.number+'%">'+d.number+'</div> </div>';} else {return '<div style="background: gold; width: 100%; border-radius: 10px"> </div>';}});


      goodies.append('div')
      .html(function(d) {return Number(d.number);})
      .transition()
      .delay(400)
      .style('padding','auto')
      .style('width', '10%');

      console.log('bar made');

    }

});
