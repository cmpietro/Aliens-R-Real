// from data.js
var tableData = data;

// Create the table 
var tableData = data;

// Reference the table body
var tbody = d3.select("tbody");

//Console log the data 
console.log(tableData);

// Create an array with the column names from the data.js 
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]

// Loop through the array of the data and append each row to table on to the webpage 
function loadData(){
    tableData.forEach(aliens =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state" ||column == "country"){
                row.append("td").text(aliens[column].toUpperCase()) //change the headers to Upper case
              }
              else row.append("td").text(aliens[column])    
        })
    })
}
// call the function to load the data 
loadData()
// Reference  the input element on the page with the id property 
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");


// Reference  the filter button on the page with the id property set to `filter-btn`
var filterButton = d3.select("#filter-btn");

// Reference  the filter button on the page with the id property set to `filter-btn`
var resetButton = d3.select("#reset-btn");

// create a function for filtering the data with the given input
function filterData(){

    // Prevention
    d3.event.preventDefault();
   
    // Extract the given input for all the fields on the web page
    var DateValue = inputDate.property("value")
    var CityValue = inputCity.property("value")
    var StateValue = inputState.property("value")
    var CountryValue = inputCountry.property("value")
    var ShapeValue = inputShape.property("value")

    // Apply the conditions for filtering the data and assign it to a variable
    var filteredData = tableData.filter(function(recorded){
       return ((recorded.datetime === DateValue ||DateValue == "" ) &&
                (recorded.city === CityValue ||CityValue == "") &&
                (recorded.state === StateValue ||StateValue == "")&&
                (recorded.country === CountryValue ||CountryValue == "")&&
                (recorded.shape === ShapeValue ||ShapeValue== "")
            )
    })

    // Print the filtered data to the console
    console.log(filteredData)
    // Empty the table to append with the filtered data 
    tbody.text("")
    // Update the table with the filtered data     
    filteredData.forEach(aliens =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state" ||column == "country"){
                row.append("td").text(aliens[column].toUpperCase())
              }
              else row.append("td").text(aliens[column])    
        })
    })
}
// Filter table data and return input on click button
filterButton.on("click",filterData)

// Reset the table 
function resetData(){
    tbody.text("")
    loadData()
    }
    
// Reset button to reset the table to original data 
resetButton.on("click",resetData)
