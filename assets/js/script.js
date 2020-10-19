// const moment = require("moment");

//Setup up elements to use
var currentDayEl = document.getElementById("currentDay");
var allhours = document.getElementsByClassName("hour");
var moment = moment();
// var textareaEl document.getElementById
// getting TODAY'S DATE cd .and displaying it
var todaysDate = moment.format('dddd, MMMM Do');
currentDayEl.innerHTML = todaysDate;



// getting hours in the day 


// Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'
// If there is nothing in 'localStorage', sets the 'list' to an empty array
var eventListArray = JSON.parse(localStorage.getItem('eventlist')) || [];

function renderEvents(eventListArray){

    for (var i =0; i < eventListArray.length;i++){
        eventListIndex = i;
        $(["event-number= eventListArray[eventListIndex].eventNumber"]).val(eventListArray[i].event)

        
    }

}

// $(document).ready(function() {
//    if ($('#hour').val = '12PM'
//         console.log(true);
//     }
// }

$(".saveBtn").on('click', function(event){
    event.preventDefault();
    var

    var eventNumber = $(this).attr('button-number');

    id = "event-number =" + eventNumber;

    var eventinput = $("#event-4")
        .val()
        .trim();

       

        eventListObj = {"eventNumber":eventNumber, "event" : eventinput}

        eventListArray.append(eventListObj);

        renderEvents(eventListArray);

        localStorage.setItem('eventlist', JSON.stringify(eventListArray));

});



renderEvents(eventListArray);