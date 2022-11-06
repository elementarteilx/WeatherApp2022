let currentTime = new Date();

function updateCity(event) {
  event.preventDefault();
  console.log("1");
  let cityInput = document.querySelector("#city_enter");
  console.log("cityInput.value");
  let h2 = document.querySelector("h2");
  console.log("2");
  h2.innerHTML = `${cityInput.value}`;
}

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

//print date
let clock = document.querySelector("h21");
clock.innerHTML = formatDate(currentTime);

//print current city
let city_input = document.querySelector("#city_input");
city_input.addEventListener("click", updateCity);
