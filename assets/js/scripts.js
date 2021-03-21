const timeBlockForm = $('#9form');
const timeBlockInput = $('#9am');
const timeBlockButton = $('#9amButton');

let fivePmField = $('#5pm');
const saveButton = $('.btn');

let message = fivePmField.value;

saveButton.on("click", function(e) {
    e.preventDefault();
    // let message = fivePmField.value.trim();
    console.log(message);

})

// let saveMeeting = function() {
//     let dailyMeetings = {
//         meeting:  fourPmField.value
//     }

//     localStorage.setItem('dailyMeetings', JSON.stringify(dailyMeetings));
// }

// let renderMeeting = function() {
//     let currentEvent = JSON.parse(localStorage.getItem("dailyMeetings"));
//     fourPmField.innerText = currentEvent.meeting;

// }


// saveButton.on('click', function(e) {
//     e.preventDefault();
//     saveMeeting();
//     renderMeeting();
// });


var today = moment();
$("#currentDay").text(today.format("[Today's date is] MMM Do, YYYY"));

var timeRightNow = moment();
$("#currentTime").text(today.format("[It is currently] LTS"));


// $('.container-fluid').find