// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

function updateTable(tableData){
  tbody.html('');
  tableData.forEach(function (ufoSighting) {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function ([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

updateTable(tableData);
// Start of the filter Code

var submit = d3.select("#submit");

submit.on("click", function (){

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

  console.log(filteredData);

  updateTable(filteredData);

});