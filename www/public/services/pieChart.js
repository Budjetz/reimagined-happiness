angular.module('budjetz').service('pieChart', function($state) {

  this.makePieChart = function() {


        color = d3.scale.category20();
        if(document.getElementById('startingMoney')){
        var start = document.getElementById('startingMoney');
        var payCheck = document.getElementById('monthlyPayCheck');
        var gasBudget = document.getElementById('gasBudget');
        var rentBudget = document.getElementById('rentBudget');
        var w = 300,
        h = 300,
        r = 100,

        data = [start.value, payCheck.value, gasBudget.value, rentBudget.value];

        // make a pie constructor
        var pie = d3.layout.pie();

        // define the SHAPE of the pie pieces
        // d3.arc = shape
        var arc = d3.svg.arc()
	        .outerRadius(r)
	        .innerRadius(r/2);

          // create an svg element
          // this could be done with html
        if(d3.selectAll('g')[0][0]) {
          var svg = d3.select('svg')
	         .append('svg')
	         .attr('width',w)
	         .attr('height',h);
         } else {
           var svg = d3.select('.circle')
 	         .append('svg')
 	         .attr('width',w)
 	         .attr('height',h);
         }


         // put a container in the svg, in order to center things
    var container = svg.append("g")
      .attr('class','group')
      .attr('transform',"translate(" + w / 2 + "," + h / 2 + ")");

        // create a stencil by passing the data to our pie constructor
    var stencil = pie(data);

    // create a "g" tag for every element in the array, store it in the variable g
    var g = container
      .selectAll("g") // create virtual arc pieces that don't exist yet
    	.data(stencil)	// bind the non existent arcs to data
      .enter()			// create a selection
    	.append('g')
      .attr('onclick', function(d){
      	return 'console.log('+ d.value + ')' });

    // append a path element to each g tag, and make it a colorful arc
    g.append("path")
      .attr("d", arc)
      .style("fill", function(d,i){
      	return color(d.value);
      });

    g.append("text")
      .attr('transform', function(d) { return 'translate('+ d3.svg.arc()
      .outerRadius(r - 10)
      .innerRadius(r - 40).centroid(d) + ')';})
      .attr("dy", ".35em")
      .text(function(d) { if(d.data){return '$' + d.data;} });


      console.log('pieMade');

    }
  }

});
