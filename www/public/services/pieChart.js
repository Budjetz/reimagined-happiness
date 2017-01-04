angular.module('budjetz').service('pieChart', function($state) {

  this.makePieChart = function(data) {
        color = ['red','pink','darkred','blue','lightgreen','green','darkgreen']
        var w = 250,
        h = 250,
        r = 115;
        // make a pie constructor
        var pie = d3.layout.pie()
        .value(function(d) { return d.expenditures});
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
      .on('mouseover', function(d) {
        this.parentNode.appendChild(this);
        d3.select(this)
        .select('text')
        .attr('fill','black')
      })
      .on('mouseout', function(d) {
        d3.select(this)
        .select('text')
        .attr('fill','rgba(255, 255, 255, 0)')
      });
    // append a path element to each g tag, and make it a colorful arc
    g.append("path")
      .transition()
      .attr("d", arc)
      .style("fill", function(d,i){
      	return color[i];
      });
    var labelArc = d3.svg.arc()
      .outerRadius(r - 40)
      .innerRadius(r - 20);
    g.append("text")
      .attr('id','text')
      .transition()
      .transition(100)
      .style("transform", function(d) { return "translateX( -" + d.data.name.length*5 + "px )"; })
      .attr("dy", ".35em")
      .attr('fill','rgba(255, 255, 255, 0)')
      .style('font-family','comic sans')
      .style('font-size','25px')
      .text(function(d) { if(d.data){ return d.data.name;} })
      // .style('transform','translate(-15px,0px)');
      console.log('pieMade');
  }

});
