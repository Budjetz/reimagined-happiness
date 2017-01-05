angular.module('budjetz').service('barChart', function($state) {

  this.makeBarChart = function(data) {
      if(d3.select('.barChart')[0]){
        d3.selectAll('.barChart').remove();
      }
      var body = d3.select('.barGraph')
      .selectAll('.barChart');
      var goodies = body.data(data)
      .enter()
      .append('div')
      .attr('class', 'barChart')
      .on('click',function(d){ $state.go('budget',{id: d.name})})
      .style('width', 'auto')
      .style('justify-content', 'space-between')
      .style('margin','10px')
      .html(function(d) {
        if(d.expenditures>0){
          var x = d3.scale.linear()
            .domain([0, d.budget_amount])
            .range([0, 100]);
            if(d.budget_amount < d.expenditures){
              return '<div style="display: flex;"> <div style="background: gold; width: 100%; border-radius: 10px"> <div style="background:purple; padding-left: 5px; border-radius: 10px; width : 100%">' + d.expenditures + '</div> </div> <div>' + d.budget_amount + '</div> </div>';
            } else {
              return '<div style="display: flex;"> <div style="background: #7cae84; width: 100%; border-radius: 10px"> <div style="background:gold; padding-left: 5px; border-radius: 10px; width:'+ x(d.expenditures) + '%">'+d.expenditures+'</div> </div> <div>' + d.budget_amount + '</div> </div>';
            }
        } else {
          return '<div style="background: gold; width: 100%; border-radius: 10px"> </div>';}});
      goodies.append('div')
      .html(function(d) {return d.name})
      .style('text-align','center');
    }

});
