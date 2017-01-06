angular.module('budjetz').service('barChart', function($state, getService) {

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
              return '<div style="display: flex;"> <div style="background: #fdde2c; width: 100%; border-radius: 10px"> <div style="background:red; padding-left: 5px; border-radius: 10px; width : 100%">' + d.expenditures + '</div> </div> <div>' + d.budget_amount + '</div> </div>';
            } else {
              return '<div style="display: flex;"> <div style="background: #1a902d; width: 100%; border-radius: 10px"> <div style="background:#fdde2c; padding-left: 5px; border-radius: 10px; width:'+ x(d.expenditures) + '%">'+d.expenditures+'</div> </div> <div>' + d.budget_amount + '</div> </div>';
            }
        } else {
          return '<div style="background: gold; width: 100%; border-radius: 10px"> </div>';}});
      goodies.append('div')
      .html(function(d) {return d.name})
      .style('text-align','center');
    }

    this.makeSavingsBar = () => {
      getService.getBudgetExpenditures().then( (res) => {
        var data = {}
            final = []
            expenditures = 0
            budgets = 0;
        res.data.filter( (val) => {
          expenditures += val.expenditures;
        });
        res.data.filter( (val) => {
          budgets += val.budget_amount
        })
        data.one = budgets;
        data.two = expenditures;
        final.push(data)
        return final
      }).then( (data) => {
          var main = d3.select('.totalBar')
            .selectAll('.totalBar')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'some')
            .style('width','auto')
            .style('margin','10px')
            .html(function (d) {
              var x = d3.scale.linear()
                .domain([0, d.one])
                .range([0, 100]);
                if(d.one > d.two){
                  return '<div style="display: flex;"> <div style="background: #7cae84; width: 100%; border-radius: 10px"> <div style="background:#ff6600; padding-left: 5px; border-radius: 10px; width:'+ x(d.two) + '%">'+d.two+'</div> </div> <div>' + d.one + '</div> </div>'
                } else {
                  return '<div style="display: flex;"> <div style="background: #7cae84; width: 100%; border-radius: 10px"> <div style="background:red; padding-left: 5px; border-radius: 10px; width:100%">'+d.two+'</div> </div> <div>' + d.one + '</div> </div>'
                }
            })
        })



    }
});
