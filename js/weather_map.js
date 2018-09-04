"use strict";

let apiKey = localStorage.getItem("owmApiKey");

function currentWeather(data) {
    let cWeatherHTML =
        `<h2 class="m-0">${new Date(data.dt * 1000).toDateString()}</h2>
            <br />
            <h3 class="m-0">Temperature: ${data.main.temp}º</h3>
            <h5 class="m-0">High/Low: ${data.main.temp_min}º/${data.main.temp_max}º</h5>
            <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h5 class="m-0">${data.weather[0].main}: ${data.weather[0].description}</h5>
            <h5 class="m-0">Humidity: ${data.main.humidity}</h5>
            <h5 class="m-0">Wind: ${data.wind.speed}mph</h5>
            <h5 class="m-0">Pressure: ${data.main.pressure}</h5>
        `;
    $("#cityName").text(data.name);
    $("#weatherCurrent").html(cWeatherHTML);
}

let weatherData = {};
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: apiKey,
    q: "San Antonio, US",
    units: "imperial",
}).done(function (data) {
    weatherData = data;
    currentWeather(data);
});

let forcastData = {};
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: apiKey,
    q: "San Antonio, US",
    units: "imperial",
    cnt: 30
}).done(function (data) {
    forcastData = data;
    parseForcastData(data);
    processForecastData(dayData);
});

function addDays(date, days) {
    return new Date(date.setDate(date.getDate() + days));
}

let dayData = {
    day1Data: [],
    day2Data: [],
    day3Data: [],
};

function parseForcastData(data) {
    for (let i = 1; i < 4; i++) {
        let date = new Date();
        let dateString = addDays(date, i).toDateString();
        data.list.forEach((data) => {
            if (new Date(data.dt_txt).toDateString() === dateString) {
                dayData[`day${i}Data`].push(data);
            }
        });
    }
}

function processForecastData(data) {
    let day1Avg = {};
    let max = 0;
    let min = 0;
    let hum = 0;
    let wind = 0;
    let pres = 0;
    data.day1Data.forEach((day, i) => {
        max += day.main.temp_max;
        min += day.main.temp_min;
        hum += day.main.humidity;
        wind += day.wind.speed;
        pres += day.main.pressure;
        if (i === 4) {
            day1Avg.dt_txt = day.dt_txt;
            day1Avg.weather = {
                "desc": day.weather[0].description,
                "id": day.weather[0].id,
                "icon": day.weather[0].icon,
                "main": day.weather[0].main,
            }
        }
    });
    day1Avg.temp_max = (max / data.day1Data.length);
    day1Avg.temp_min = (min / data.day1Data.length);
    day1Avg.humidity = (hum / data.day1Data.length);
    day1Avg.wind = (wind / data.day1Data.length);
    day1Avg.pressure = (pres / data.day1Data.length);

    let day2Avg = {};
    max = 0;
    min = 0;
    hum = 0;
    wind = 0;
    pres = 0;
    data.day2Data.forEach((day, i) => {
        max += day.main.temp_max;
        min += day.main.temp_min;
        hum += day.main.humidity;
        wind += day.wind.speed;
        pres += day.main.pressure;
        if (i === 4) {
            day2Avg.dt_txt = day.dt_txt;
            day2Avg.weather = {
                "desc": day.weather[0].description,
                "id": day.weather[0].id,
                "icon": day.weather[0].icon,
                "main": day.weather[0].main,
            }
        }
    });
    day2Avg.temp_max = (max / data.day1Data.length);
    day2Avg.temp_min = (min / data.day1Data.length);
    day2Avg.humidity = (hum / data.day1Data.length);
    day2Avg.wind = (wind / data.day1Data.length);
    day2Avg.pressure = (pres / data.day1Data.length);

    let day3Avg = {};
    max = 0;
    min = 0;
    hum = 0;
    wind = 0;
    pres = 0;
    data.day3Data.forEach((day, i) => {
        max += day.main.temp_max;
        min += day.main.temp_min;
        hum += day.main.humidity;
        wind += day.wind.speed;
        pres += day.main.pressure;
        if (i === 4) {
            day3Avg.dt_txt = day.dt_txt;
            day3Avg.weather = {
                "desc": day.weather[0].description,
                "id": day.weather[0].id,
                "icon": day.weather[0].icon,
                "main": day.weather[0].main,
            }
        }
    });
    day3Avg.temp_max = (max / data.day1Data.length);
    day3Avg.temp_min = (min / data.day1Data.length);
    day3Avg.humidity = (hum / data.day1Data.length);
    day3Avg.wind = (wind / data.day1Data.length);
    day3Avg.pressure = (pres / data.day1Data.length);

    displayForecast({"day1Avg": day1Avg, "day2Avg": day2Avg, "day3Avg": day3Avg});
}

function displayForecast(data) {
    for (let i = 1; i < 4; i++) {
        let dayData = data[`day${i}Avg`];
        let weatherHTML =
            `<h2 class="m-0">${new Date(dayData.dt_txt).toDateString()}</h2>
            <br />
            <h5 class="m-0">High/Low: ${dayData.temp_min.toFixed(1)}º/${dayData.temp_max.toFixed(1)}º</h5>
            <img src="http://openweathermap.org/img/w/${dayData.weather.icon}.png">
            <h5 class="m-0">${dayData.weather.main}: ${dayData.weather.desc}</h5>
            <h5 class="m-0">Humidity: ${dayData.humidity.toFixed(1)}</h5>
            <h5 class="m-0">Wind: ${dayData.wind.toFixed(2)}mph</h5>
            <h5 class="m-0">Pressure: ${dayData.pressure.toFixed(1)}</h5>
        `;
        let div = $(`#weather${i}`);
        div.toggleClass("hidden");
        div.html(weatherHTML);
    }
}
