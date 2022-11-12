let api_key = "1beee1988cc129f68ea910a5ef418d22";

document.getElementById("search-button").addEventListener("click", function () {
  const cityName = document.getElementById("city-name");
  const currentCity = cityName.value;
  let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${api_key}&units=metric`;
  fetch(api_url)
    .then((res) => res.json())
    .then((data) => displayWeather(data));
});

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayWeather = (weather) => {
  console.log(weather);
  setInnerText("city", weather.name);
  setInnerText("temperature", weather.main.temp);
  setInnerText("condition", weather.weather[0].main);
  // set weather icon
  const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
