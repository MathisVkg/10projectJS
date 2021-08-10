
const newYear = "1 Jan 2022";
let timerText = document.getElementById("timerTag");
let daysTag = document.getElementById("days");
let hoursTag = document.getElementById("hours");
let minTag = document.getElementById("minutes");
let secTag = document.getElementById("seconds");


function getTime() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysTag.innerHTML = days;
    hoursTag.innerHTML = timeSet(hours);
    minTag.innerHTML = timeSet(minutes);
    secTag.innerHTML = timeSet(seconds);
}

function timeSet(time) {
    return time < 10 ? (`0${time}`) : time;
}


getTime();
setInterval(getTime, 1000);
