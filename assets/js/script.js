// const moment = require("moment");

//Setup up elements to use
var currentDayEl = document.getElementById("currentDay");


// getting TODAY'S DATE cd .and displaying it
var todaysDate = moment().format('dddd')+ ", " + moment().format('MMMM Do');
currentDayEl.innerHTML = todaysDate;


// Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'
// If there is nothing in 'localStorage', sets the 'list' to an empty array
var list = JSON.parse(localStorage.getItem('todolist')) || [];
