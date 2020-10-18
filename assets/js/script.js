// Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'
// If there is nothing in 'localStorage', sets the 'list' to an empty array
var list = JSON.parse(localStorage.getItem('todolist')) || [];
