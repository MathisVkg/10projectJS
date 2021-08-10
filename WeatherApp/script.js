
// let APIURL = "https://community-open-weather-map.p.rapidapi.com/find";


let temp = document.getElementById("tempTag");
let wind = document.getElementById("windTag");
let description = document.getElementById("descripTag");
let presentDay = new Date();
let dayStockDate = presentDay.getDay();
let stockDay1;
let stockDay2;
let stockDay3;
let stockDay;

switch (dayStockDate) {
    case 1:
        stockDay1 = "Tuesday";
        stockDay2 = "Wednesday";
        stockDay3 = "Thursday";
        stockDay = "Monday";
        break;
    case 2:
        stockDay1 = "Wednesday";
        stockDay2 = "Thursday";
        stockDay3 = "Friday";
        stockDay = "Tuesday";
        break;
    case 3:
        stockDay1 = "Thursday";
        stockDay2 = "Friday";
        stockDay3 = "Saterday";
        stockDay = "Wednesday";
        break;
    case 4:
        stockDay1 = "Friday";
        stockDay2 = "Saterday";
        stockDay3 = "Sunday";
        stockDay = "Thursday";
        break;
    case 5:
        stockDay1 = "Saturday";
        stockDay2 = "Sunday";
        stockDay3 = "Monday";
        stockDay = "Friday";
        break;
    case 6:
        stockDay1 = "Sunday";
        stockDay2 = "Monday";
        stockDay3 = "Tuesday";
        stockDay = "Saturday";
        break;
    case 7:
        stockDay1 = "Monday";
        stockDay2 = "Tuesday";
        stockDay3 = "Wednesday";
        stockDay = "Sunday";
        break;
}

function getWeatherAPI() {
    // fetch("https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-key": "d668c0369cmshd069aa0b4a96a6fp1f15e5jsna564bfc9c0e0",
	// 	"x-rapidapi-host": "meteostat.p.rapidapi.com"
	// }
    // })
    fetch("https://aerisweather1.p.rapidapi.com/alerts/jordan,mt", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d668c0369cmshd069aa0b4a96a6fp1f15e5jsna564bfc9c0e0",
            "x-rapidapi-host": "aerisweather1.p.rapidapi.com"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
}
getWeatherAPI();


// function getAPI() {
//     fetch(APIURL)
//     .then((res) => res.json())
//     .then((data) => {
//         // temp.innerHTML = "Temperature for " + stockDay + ": " + data.temperature;
//         // wind.innerHTML = "Wind force: " + data.wind;
//         // description.innerHTML = "Weather: " + data.description;
//         // // if(data.forecast[0].temperature > "0" && data.forecast[0].wind > "0") {
//         //     document.getElementById("currentDay1Tag").innerHTML = stockDay1;
//         //     document.getElementById("tempDay1Tag").innerHTML = data.forecast[0].temperature;
//         //     document.getElementById("windDay1Tag").innerHTML = data.forecast[0].wind;
//         // // } if (data.forecast[1].temperature > "0" && data.forecast[1].wind > "0") {
//         //     document.getElementById("currentDay2Tag").innerHTML = stockDay2;
//         //     document.getElementById("tempDay2Tag").innerHTML = data.forecast[1].temperature;
//         //     document.getElementById("windDay2Tag").innerHTML = data.forecast[1].wind;
//         // // } if (data.forecast[2].temperature > "0" && data.forecast[2].wind > "0") {
//         //     document.getElementById("currentDay3Tag").innerHTML = stockDay3;
//         //     document.getElementById("tempDay3Tag").innerHTML = data.forecast[2].temperature;
//         //     document.getElementById("windDay3Tag").innerHTML = data.forecast[2].wind;
//         // // }
//         console.log(data);
//     });
// }
// getAPI();
// setInterval(getAPI(), 60000);
