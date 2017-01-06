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
              return '<div style="display: flex;"> <div style="background: #fdde2c; width: 100%; border-radius: 10px"> <div style="background: red; padding-left: 5px; border-radius: 10px; width : 100%">' + d.expenditures + '</div> </div> <div>' + d.budget_amount + '</div> </div>';
            } else {
              return '<div style="display: flex;"> <div style="background: #1a902d; width: 100%; border-radius: 10px"> <div style="background:#fdde2c; padding-left: 5px; display:flex; border-radius: 10px; width:'+ x(d.expenditures) + '%">'+d.expenditures+'</div> </div> <div>' + d.budget_amount + '</div> </div>';
            }
        } else {
          return '<div style="background: gold; width: 100%; border-radius: 10px"> </div>';}});
      goodies.append('div')
      .html(function(d) {return d.name})
      .style('text-align','center');
    }

    this.makeSavingsBar = () => {
      getService.getBudgetExpenditures().then( (res) => {
        if(d3.select('.savings')[0]){
          d3.selectAll('.savings').remove();
        }
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
          var main = d3.select('.savingsBar')
            .selectAll('.savingsBar')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'savings')
            .style('width','auto')
            .style('margin','10px')
            .html(function (d) {
              var x = d3.scale.linear()
                .domain([0, d.one])
                .range([0, 100]);
                if(d.one > d.two){
                  return '<div style="display: flex;"> <div style="background: #1a902d; width: 100%; border-radius: 10px"> <div style="background:#fdde2c; padding-left: 5px; border-radius: 10px; width:'+ x(d.two) + '%">'+d.two+'</div> </div> <div>' + d.one + '</div> </div>'
                } else {
                  return '<div style="display: flex;"> <div style="background: #1a902d; width: 100%; border-radius: 10px"> <div style="background:red; padding-left: 5px; border-radius: 10px; width:100%">'+d.two+'</div> </div> <div>' + d.one + '</div> </div>'
                }
            })
            makeTotalBar(data)
        })

        makeTotalBar = (data) =>{

          if(d3.select('.totals')[0]){
            d3.selectAll('.totals').remove();
          }
          getService.getMoneyTotal().then( (res) => {
            data[0].total = res.data[0].amount;
            console.log(res.data[0].amount);
            var main = d3.select('.totalBar')
              .selectAll('.totalBar')
              .data(data)
              .enter()
              .append('div')
              .attr('class', 'totals')
              .style('width','auto')
              .style('margin','10px')
              .html(function (d) {
                var x = d3.scale.linear()
                  .domain([0, d.total])
                  .range([0, 100]);
                  if(d.total > d.two){
                    return '<div style="display: flex;"> <div style="background: #1a902d; width: 100%; border-radius: 10px"> <div style="background:#fdde2c; padding-left: 5px; border-radius: 10px; width:'+ x(d.two) + '%">'+d.two+'</div> </div> <div>' + d.total + '</div> </div>'
                  } else {
                    return '<div style="display: flex;"> <div style="background: #1a902d; width: 100%; border-radius: 10px"> <div style="background:red; padding-left: 5px; border-radius: 10px; width:100%">'+d.two+'</div> </div> <div>' + d.total + '</div> </div>'
                  }
              })
            })
        }
      }
});
