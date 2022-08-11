var searchBtnE1 = document.getElementById("searchBtn");
var cardE1 = document.getElementById("card");
var forecastE1 = document.getElementById("forecast");
var fiveDayForecastE1 = document.getElementById("fiveDayForecast");
var mainCardEl = document.getElementById('weatherStats');
var sunnyEl = document.getElementById('sun');
var forecastEl = document.getElementById('forecast');
var historyEl = document.getElementById('history');
var cityListEl = document.getElementById('cityList');
historyEl = []

/* Custom api key */
var apiKey = "87f3c974028e429a51503e5e3d883b50";

/* function to search city */
function searchCity() {
    var cityname = document.getElementById("city-input").value;
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apiKey}`;

}

/* function for 5-Day forecast */
function fiveDayForecast() {

}