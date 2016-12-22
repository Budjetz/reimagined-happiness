angular.module('budjetz').service('pieChart', function($state) {




  this.makePieChart = function(data) {

        color = d3.scale.category20b();

        var w = 250,
        h = 250,
        r = 100;

        // make a pie constructor
        var pie = d3.layout.pie()
        .value(function(d) { return d.value});

        // define the SHAPE of the pie pieces
        // d3.arc = shape
        var arc = d3.svg.arc()
	        .outerRadius(r)
	        .innerRadius(r/2);

          // create an svg element
          // this could be done with html
        if(d3.selectAll('g')[0][0]) {
          d3.select('svg')
	         .remove()
         }
           var svg = d3.select('.circle')
 	         .append('svg')
 	         .attr('width',w)
 	         .attr('height',h)
           .style('margin','auto')
           .style('display','flex');



         // put a container in the svg, in order to center things
    var container = svg.append("g")
      .attr('class','group')
      .attr('transform',"translate(" + w / 2 + "," + h / 2 + ")");

        // create a stencil by passing the data to our pie constructor
    var stencil = pie(data);
    // create a "g" tag for every element in the array, store it in the variable g
    var g = container
      .selectAll("g") // create virtual arc pieces that don't exist yet
    	.data(stencil)
      .enter()
    	.append('g')
      .attr('ng-click', 'logg()');

    // append a path element to each g tag, and make it a colorful arc
    g.append("path")
      .transition()
      .delay(700)
      .attr("d", arc)
      .style("fill", function(d,i){
      	return color(d.value);
      });

    var labelArc = d3.svg.arc()
      .outerRadius(r - 40)
      .innerRadius(r - 20);

    g.append("text")
      .transition()
      .delay(800)
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { if(d.data){ return '$' + d.data.label;} });


      console.log('pieMade');

  }

});
