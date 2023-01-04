let currentTime = new Date();
let globaltemperature = 0;

//
function updateCityname(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city_enter");
  console.log("cityInput.value");

  //var result = text.toUpperCase();

  callcity(cityInput.value);
}


function callcity(event) {
  console.log("11");
  console.log(event);
  console.log("1");

  //preparation for temperature update
  let apiKey = "8a6ee44d7a95db9439f2411cfbeee474";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${event}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${event}`;
}



//changes showed weather data to current city
function showTemperature(event) {
  let tempOutput = document.querySelector("#temperature");
  console.log(event);
  let temp = event.data.main.temp;
  temp = Math.round(temp);
  let humidity = event.data.main.humidity;
  tempOutput.innerHTML = temp;
  globaltemperature = temp;
  let humidityOutput = document.querySelector("#humidity");
  console.log(humidity);
  humidityOutput.innerHTML = `${humidity}%`;
  console.log(event.data.wind.speed);
  let speedOutput = document.querySelector("#wind");
  speedOutput.innerHTML = event.data.wind.speed;
  //console.log(event.data.rain.3h);  
}

//returns the current formated date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let index = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[index];
  let month = date.getMonth();
  console.log(`${day} ${hours}:${minutes}`);

  return `${day} ${hours}:${minutes}`;
}

function weatherCity(event) {}

function toCelsius(event) {
  console.log("cels");
  let tempOutput = document.querySelector("#temperature");
  tempOutput.innerHTML = globaltemperature;
}

function toFahrenheit(event) {
  console.log("fah");
  let tempOutput = document.querySelector("#temperature");
  tempOutput.innerHTML = (Math.round(globaltemperature*1.8+32));
 // tempOutput = globaltemperature*1.8+32;
}

//print date
let clock = document.querySelector("h21");
clock.innerHTML = formatDate(currentTime);

//print current city
let city_input = document.querySelector("#city_input");
city_input.addEventListener("click", updateCityname);

//convert Fahrenheit and Celsius
let celsius = document.querySelector("#Celsius");
celsius.addEventListener("click", toCelsius);

let fahrenheit = document.querySelector("#Fahrenheit");
fahrenheit.addEventListener("click", toFahrenheit);

//default City
callcity("berlin");
