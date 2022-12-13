//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////               EXERCICE 1                //////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


let date = new Date();

function displayDateTZ(date, tz, Name) {

    let city = Name
    console.log(city + ": " + date.toLocaleString('fr-FR', {
        timeZone: tz,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }));
}

displayDateTZ(date, 'US/Alaska', 'Anchorage')
displayDateTZ(date, 'Atlantic/Reykjavik', 'Reykjavik')
displayDateTZ(date, 'Europe/Moscow', 'Saint-Petersburg')
displayDateTZ(date, 'Europe/Brussels', 'Brussels')

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////               EXERCICE 2                //////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// function feelingOld(birthday) {
//     let today = new Date()
//     let date = new Date(birthday)
//     return Math.ceil(((today.getTime() - date.getTime()) / 1000 / 60 / 60 / 24))
// }

// console.log("Since my birthday, " + feelingOld('01-11-1997') + " days have passed! O_O")

// function daysPassed(dateToDisplay) {
//     let today = new Date()
//     let date = new Date(dateToDisplay)
//     return Math.ceil(((today.getTime() - date.getTime()) / 1000 / 60 / 60 / 24))
// }

// let d = prompt("What date shall I analyze? Please write it down this way: 'MM-DD-YYYY'")
// console.log("Wow! " + daysPassed(d) + " days have passed since your date!")

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////               EXERCICE 3                //////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function futureDate(hours) {
    const date = new Date();

    date.setHours(date.getHours() + hours);

    console.log("In " + hours + " seconds, we will be the: " + date);
}

futureDate(80000);


const input = document.getElementById("hours-input");

console.log(input)

input.addEventListener("keyup", function () {
    const hours = input.value;

    const date = new Date();

    date.setHours(date.getHours() + hours);

    document.getElementById("date-output").innerHTML = date.toLocaleString('fr-FR', 'Europe/Brussels');
});


function displayDate() {
    // Get the current date and time
    let currentTime = new Date();

    // Extract the hours, minutes, and seconds from the current time
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let day = currentTime.getDay();

    // Determine if the current time should be displayed in 12-hour or 24-hour format
    let timeFormat = (hours < 12) ? "AM" : "PM";

    // Convert hours from 24-hour to 12-hour format, if necessary
    hours = (hours > 12) ? hours - 12 : hours;

    // Pad minutes and seconds with leading zeroes, if necessary
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Build the final time string
    let currentTimeString = hours + ":" + minutes + ":" + seconds + " " + timeFormat;

    // Update the page with the current time
    // document.getElementById("time").innerHTML = currentTimeString;

    document.getElementsByClassName("hour")[0].innerHTML = hours + ":";
    document.getElementsByClassName("minutes")[0].innerHTML = minutes + ":";
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;

}

// Update the time every second
setInterval(displayDate, 1000);

const timeElement = document.getElementById('time');

// timeElement.addEventListener('click', function () {
//     // Get the current hour
//     const currentHour = new Date().getHours();
//     const currentMinutes = new Date().getMinutes();

//     if (currentHour > 12) {
//         // Display the time in 24-hours format
//         timeElement.innerHTML = currentHour + currentMinutes + "";
//     } else {
//         // Display the time in 12-hours format
//         timeElement.innerHTML = currentHour + currentMinutes + "AM";
//     }
// });

