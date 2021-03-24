
const saveButtons = document.querySelectorAll(".btn");
const timeBlocks = document.querySelectorAll("li");


let today = moment();
let currentHour = today.hour();


$("#resetDay").on("click", (e) => {
    localStorage.clear();
    location.reload();
    console.log("Welcome to a wonderful new day 🌞");
})


timeBlocks.forEach(function(hourLi, index) {
    if (index+9 < currentHour) {
        hourLi.setAttribute("class", "past");
    } else if (index+9 == currentHour) {
        hourLi.setAttribute("class", "present");
    } else {
        hourLi.setAttribute("class", "future");
    }

    if (currentHour == 0) {
        hourLi.setAttribute("class", "future");
    }
})


let saveMeeting = function(e) {
    const data = JSON.parse(localStorage.getItem("dailyMeetings")) || {};
    const textArea = e.target.previousElementSibling;
    
    data[textArea.id] = textArea.value;

    localStorage.setItem('dailyMeetings', JSON.stringify(data));
}

let renderMeeting = function() {
    let currentEvent = JSON.parse(localStorage.getItem("dailyMeetings")) || {};

    Object.keys(currentEvent).forEach(function(key) {
        document.getElementById(key).value = currentEvent[key]
    })
}


renderMeeting();


saveButtons.forEach(function (element) {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        saveMeeting(e);
        renderMeeting();
    })
})







$("#currentDay").text(today.format("[Today's date is] MMM Do, YYYY"));

$("#currentTime").text(today.format("[It is currently] LT"));




