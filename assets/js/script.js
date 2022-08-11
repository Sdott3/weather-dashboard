var search = document.getElementById("search");
var searchButton = document.getElementById("searchButton");
var currentWeather = document.getElementById("current-weather");
var fiveDayForecast = document.getElementById("fiveDayForecast");
var fiveDayForecastHeader = document.getElementById("fiveDayForecastHeader");

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