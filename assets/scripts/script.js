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



input.addEventListener("keyup", function () {
    const hours = input.value;

    const date = new Date();

    date.setHours(date.getHours() + hours);

    document.getElementById("date-output").innerHTML = date.toLocaleString('fr-FR', 'Europe/Brussels');
});


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////               EXERCICE 3                //////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

let hours,
    minutes,
    seconds,
    is24Hour = false,
    currentTime;

function displayDate() {
    currentTime = new Date()

    hours = currentTime.getHours()
    minutes = currentTime.getMinutes()
    seconds = currentTime.getSeconds();

    // Pad minutes and seconds with leading zeroes, if necessary
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Retrieve and shorten infos to be displayed
    let day = currentTime.toLocaleDateString("en-US", { weekday: "short" })
    let dateDay = currentTime.getUTCDate();
    let month = currentTime.toLocaleDateString("en-US", { month: "short" })
    let year = currentTime.getFullYear();

    // Pad dates with leading zeroes, if necessary
    if (dateDay < 10) {
        dateDay = "0" + dateDay
    }

    // Append previous data to our HTML
    document.getElementsByClassName("hour")[0].innerText = hours + ":"
    document.getElementsByClassName("minutes")[0].innerText = minutes + ":"
    document.getElementsByClassName("seconds")[0].innerText = seconds
    document.getElementsByClassName("day")[0].innerHTML = day;
    document.getElementsByClassName("date")[0].innerHTML = dateDay + "<br>" + month;
    document.getElementsByClassName("year")[0].innerHTML = year;

    let suffix = hours >= 12 ? "PM" : "AM",
        hours12 = hours % 12;


    if (is24Hour) {
        document.getElementsByClassName("hour")[0].innerText = hours + ":"
        document.getElementsByClassName("minutes")[0].innerText = minutes + ":"
        document.getElementsByClassName("seconds")[0].innerText = seconds
        document.getElementsByClassName("suffix")[0].innerText = ""

    }
    else {
        document.getElementsByClassName("hour")[0].innerText = hours12 + ":"
        document.getElementsByClassName("minutes")[0].innerText = minutes + ":"
        document.getElementsByClassName("seconds")[0].innerText = seconds + " "
        document.getElementsByClassName("suffix")[0].innerText = suffix
    }

}

const TIME = document.getElementById("time");


let changeFormat = function () {
    is24Hour = !is24Hour
};

TIME.addEventListener('click', changeFormat);

// Update the time every second
setInterval(displayDate, 1000);
