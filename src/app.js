//Display current day & time
function getCurrentTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentTime = document.querySelector(".current");
  return (currentTime.innerHTML = `Now: ${day} ${hour}:${minutes}`);
}

getCurrentTime();

//Dsiplay current weather info
function showWeather(reponse) {
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = Math.round(reponse.data.main.temp);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = reponse.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = reponse.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = reponse.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = reponse.data.wind.speed;
  //weather icon - not working
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

//Search city function when clicking button
function search(city) {
  let apiKey = "27ddfc7325668fadfd863bab705e25e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function submitSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  search(searchInputElement.value);
}

search("Stockholm");

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitSearch);
