//const apiKey = "c2e5d7800b7ceaf3f814f78f3f923083";
//("https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=c2e5d7800b7ceaf3f814f78f3f923083&units=metric");

const searchBox = document.querySelector(".search_box input");
const searchBtn = document.querySelector(".search_box button");
const styleBg = document.querySelector(".bg");
const weatherIcon = document.querySelector(".immg img");

async function checkWeather(city) {
  //console.log(city);
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=c2e5d7800b7ceaf3f814f78f3f923083&units=metric"
  );
  var data = await response.json();
  // console.log(data.weather[0].description);
  if (response.status >= 400) {
    searchBox.value = "Invalid city name";
    searchBox.style.color = "#ff0000";
  } else {
    searchBox.style.color = "#ffffff";

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      /*"Current temperature : " +*/ data.main.temp;
    document.querySelector(".text_t").innerHTML =
      "Sky looks : " + data.weather[0].description;
    document.querySelector(".humid_t").innerHTML =
      "Humidity : " + data.main.humidity;
    document.querySelector(".wind_speed_t").innerHTML =
      "Wind speed : " + data.wind.speed;
    document.querySelector(".feels_like_t").innerHTML =
      "Real feel : " + data.main.feels_like;

    styleBg.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + city + "')";
    //console.log(styleBg.style.backgroundImage);
    document.querySelector(".immg img").src =
      "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkWeather(searchBox.value);
  }
});

checkWeather("rangpur"); // defaul address
