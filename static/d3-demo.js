var data = ["a", "b", "c", ];

var margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = 600 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
  .domain(data)
  .rangePoints([0, width], 1)
;

var y = d3.scale.ordinal()
  .domain(data)
  .rangePoints([0, height], 1)
;

var svg = d3.select("#d3")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
;

svg.selectAll("circles")
  .data(data)
  .enter()
  .append("svg:circle")
  .attr("cx", function(i) { return x(i); })
  .attr("cy", function(i) { return y(i); })
  .attr("r", 10)
  .attr("width", 50)
  .attr("height", 50)
  .style("stroke", "steelblue")
  .style("fill", "none")
  .style("stroke-width", "4px")
;

setTimeout(function() {
      // Do something after 5 seconds
}, 5000);