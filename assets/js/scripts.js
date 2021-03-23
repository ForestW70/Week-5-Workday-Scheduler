const timeBlockForm = $('#9form');
const timeBlockInput = $('#9am');
const timeBlockButton = $('#9amButton');

let fivePmField = $('#5pm');
const saveButtons = document.querySelectorAll(".btn");

let message = fivePmField.value;

// saveButton.on("click", function(e) {
//     e.preventDefault();
//     // let message = fivePmField.value.trim();
//     console.log(message);

// })

let saveMeeting = function(e) {
    const data = JSON.parse(localStorage.getItem("dailyMeetings")) || {};
    const textArea = e.target.previousElementSibling;
    
    
    data[textArea.id] = textArea.value;

    localStorage.setItem('dailyMeetings', JSON.stringify(data));
}

let renderMeeting = function() {
    let currentEvent = JSON.parse(localStorage.getItem("dailyMeetings")) || {};

    Object.keys(currentEvent).forEach(key => {
        document.getElementById(key).value = currentEvent[key]
    })
    
}

renderMeeting();



saveButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        saveMeeting(e);
        renderMeeting();
    })
})





var today = moment();
$("#currentDay").text(today.format("[Today's date is] MMM Do, YYYY"));

var timeRightNow = moment();
$("#currentTime").text(today.format("[It is currently] LTS"));




// $('.container-fluid').find