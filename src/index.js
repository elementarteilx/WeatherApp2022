let currentTime = new Date();

function formatDate(date) {
  console.log("1");

  let minutes = date.getMinutes();

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
  console.log("2");
  let day = days[index];
  let month = date.getMonth();
  console.log("3");
  console.log(`${day} ${hours}:${minutes}`);
  console.log("4");

  return `${day} ${hours}:${minutes}`;
}

console.log("hello");

let clock = document.querySelector("h21");
clock.innerHTML = formatDate(currentTime);

let h2 = document.querySelector("h2");
h2.innerHTML = "hello";

console.log("hello1");
