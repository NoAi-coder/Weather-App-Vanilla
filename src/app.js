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
  return (currentTime.innerHTML = `Now: ${day} at ${hour}:${minutes}`);
}

getCurrentTime();

//Search city function when clicking button
function submitSearch(event) {
  event.preventDefault();
  let yourCity = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  city.innerHTML = yourCity.value;

  let apiKey = "27ddfc7325668fadfd863bab705e25e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${yourCity.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(submitSearch, showTemp);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", submitSearch);
