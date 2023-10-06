const yourWeatherButton = document.getElementById("your_weather");
const searchWeatherButton = document.getElementById("search_weather");
const locationSearchContainer = document.getElementById(
  "location_search_container"
);
const yourWeatherContainer = document.getElementById("your_weather_container");
const grantAccessButton = document.getElementById("grant_access_btn");
const grantLocationContainer = document.getElementById(
  "grant_location_container"
);
// const place = document.getElementById("place");
// const weatherState = document.getElementById("weather_state");
// const temp = document.getElementById("temperature");
// const weatherStateImage = document.getElementById("weather_state_image");
// const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
let APIkey = "853a4c045218afcc786fa370edfef2ff";

function showSearchWeatherUI() {
  locationSearchContainer.classList.remove("hidden");
}
function hideSearchWeatherUT() {
  locationSearchContainer.classList.add("hidden");
}
function showYourWeatherUI() {
  yourWeatherContainer.classList.remove("hidden");
}
function hideYourWeatherUI() {
  yourWeatherContainer.classList.add("hidden");
}
searchWeatherButton.addEventListener("click", () => {
  searchWeatherButton.classList.add("currentTab");
  yourWeatherButton.classList.remove("currentTab");

  showSearchWeatherUI();
  hideYourWeatherUI();
});
yourWeatherButton.addEventListener("click", () => {
  yourWeatherButton.classList.add("currentTab");
  searchWeatherButton.classList.remove("currentTab");
  hideSearchWeatherUT();
  showYourWeatherUI();
});
grantAccessButton.addEventListener("click", () => {
  getLocation();
  // alert("dasd");
});

//function to access the current location of the user
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCityUsingCoords);
  } else {
    alert("location error");
  }
}
//function to return the latitide nand longitude of the location of the user and call the api to get the weather data as json format
async function getCityUsingCoords(position) {
  let latitude = position.coords.latitude.toFixed(2);
  let longitude = position.coords.longitude.toFixed(2);
  console.log("Latitude: " + latitude + "<br>Longitude: " + longitude);
  grantLocationContainer.classList.add("hidden");
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "15f19f359dmshaf7c7f46201e030p11ec4cjsn6d395da34885",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    var result = await response.json();
  } catch (error) {
    console.error(error);
  }
  console.log(result);
  yourWeatherContainer.classList.remove("hidden");
}
function renderWeather() {}

/*const weatherCondition = document.getElementById("weatherCondition");
let cityname = " mumbai";
let APIkey = "853a4c045218afcc786fa370edfef2ff";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;

async function getWeatherData() {
  //this function brings the weather deatils from the api server
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (err) {
    console.log("Error: ", err);
  }
}
getWeatherData();
*/