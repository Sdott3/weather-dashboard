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

/* click function */
searchBtnE1.addEventListener("click", searchCity)

/* function to search city */
function searchCity() {

    var cityName = document.getElementById('citySearch').value;

    localStorage.setItem("citySave", JSON.stringify(cityName) )

    var cityBtn = document.createElement('button')
    cityBtn.textContent = cityName.toUpperCase();
    historyEl.push(cityBtn)
    cityListEl.appendChild(cityBtn);

    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apiKey}`;

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

    /*main card element */

    console.log(data);
        var displayDate = document.createElement('h2');
        displayDate.textContent = data.name + " " + moment().format('L');
        mainCardEl.appendChild(displayDate);

        var temperature = document.createElement('li');
        temperature.textContent ="Temperature: " + data.main.temp + "°F";
        mainCardEl.appendChild(temperature);

        var humidity = document.createElement('li');
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        mainCardEl.appendChild(humidity);

        var windSpeed = document.createElement('li');
        windSpeed.textContent = "Wind Speed: " + data.wind.speed + " MPH";
        mainCardEl.appendChild(windSpeed);

        var lon = data.coord.lon;
        var lat = data.coord.lat;

        console.log(lon, lat);

        var uviURL= `https://api.openweathermap.org/data/2.5/onecall?cnt=5&lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
            fetch(uviURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
}

/* function for 5-Day forecast */
function fiveDayForecast() {

}