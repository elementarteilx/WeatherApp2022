let currentTime = new Date();

//
function updateCityname(event) {
  event.preventDefault();
  console.log("1");
  let cityInput = document.querySelector("#city_enter");
  console.log("cityInput.value");
  let h2 = document.querySelector("h2");
  console.log("2");
  h2.innerHTML = `${cityInput.value}`;
  //var result = text.toUpperCase();

  //preparation for temperature update
  let apiKey = "8a6ee44d7a95db9439f2411cfbeee474";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

//changes showed weather data to current city
function showTemperature(event) {
  let tempOutput = document.querySelector("#temperature");
  console.log(event);
  let temp = event.data.main.temp;
  let humidity = event.data.main.humidity;
  tempOutput.innerHTML = temp;
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
  if (hours < 10) {
    hours = `0 + ${hours}`;
  }

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

//print date
let clock = document.querySelector("h21");
clock.innerHTML = formatDate(currentTime);

//print current city
let city_input = document.querySelector("#city_input");
city_input.addEventListener("click", updateCityname);

//update temperature

updateCityname("Berlin");
