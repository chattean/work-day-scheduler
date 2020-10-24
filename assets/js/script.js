
//Setup up elements to use
var currentDayEl = document.getElementById("currentDay");
var allhours = document.getElementsByClassName("hour");
var moment = moment();

// getting TODAY'S DATE cd .and displaying it
var todaysDate = moment.format('dddd, MMMM Do');
currentDayEl.innerHTML = todaysDate;

// Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'
// If there is nothing in 'localStorage', sets the 'list' to an empty array
var eventListArray = JSON.parse(localStorage.getItem('eventlist')) || [];

renderEvents(eventListArray);

function renderEvents(eventListArray){

    for (var i =0; i < eventListArray.length;i++){
        eventListIndex = i;
        $("[event-number='"+ eventListArray[eventListIndex].eventNumber +"']").val(eventListArray[i].event);
    };
}

// Whenever Save button is clicked this function will set to localstorage an event number for the time slot
// and save the input that the user has
$(".saveBtn").each(function(){
    $(this).on('click', function(event){
        event.preventDefault();

        var eventNumber = $(this).attr('button-number');

        var eventinput = $("[event-number='"+ eventNumber +"']")
            .val()
            .trim();

        eventListObj = {"eventNumber":eventNumber, "event" : eventinput}

        eventListArray.push(eventListObj);
        renderEvents(eventListArray);

        localStorage.setItem('eventlist', JSON.stringify(eventListArray));
})});

// Changing the time-block div to be a different color for past, present and future
function changeTimeBlockBackgroud(){
    $('.time-block').each(function(){
        var hourOnPage = $(this).attr("id"); // this is the id we specified in the HTML
        var currentHour = moment.format("HH"); // use moment to get current hour
        //convert to int for comparing
        hourOnPage = parseInt(hourOnPage);
        currentHour = parseInt(currentHour);

        //logic for change of background color

        if (currentHour < hourOnPage)
            $(this).addClass("future");
        else if(currentHour>hourOnPage)
            $(this).addClass("past");
        else
            $(this).addClass("present");
    })
}

$(document).ready(function() {
    changeTimeBlockBackgroud();
});

renderEvents(eventListArray);