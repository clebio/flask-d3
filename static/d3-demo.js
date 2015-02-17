var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var data = [];
for (i = 0; i < 10; i++) {
  letter = alphabet[Math.floor(Math.random() * 26)]
  data.unshift(letter)
}

var margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = 600 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

spacing = width / data.length;

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

function update(set) {

  var text = svg.selectAll("text")
    .data(set, function(d) { return d; })
  ;

  text.attr("class", "update")
    .transition()
    .duration(750)
    .attr("x", function(d, i) { return i * spacing; })
    .attr("y", height/2);
  ;

  text.enter().append("text")
    .attr("class", "enter")
    .attr("x", function(d, i) { return i * spacing; })
    .attr("y", margin.top + 48)
      .style("fill-opacity", 1)
  ;

  text.text(function(d) { return d; });

  text.exit()
    .attr("class", "exit")
    .transition()
    .duration(750)
    .attr("y", height)
    .style("fill-opacity", 1e-6)
    .remove()
  ;

}

setInterval(function() {
    $.getJSON('/_get_letters', {
	dataset: data.join(""),
	replace: 3,
    }, function(dataset) {
	data = dataset.result.split("")
    });
    update(data);
}, 2000);

update(data);
