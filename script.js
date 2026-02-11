function checkWeather() {
  let city = document.getElementById("cityInput").value;
  let result = document.getElementById("weatherResult");

  if (city === "") {
    result.innerHTML = "⚠ Please enter a city name.";
    return;
  }

  // Demo weather data
  let weatherData = {
    "chennai": "☀ Sunny, 32°C",
    "delhi": "🌫 Foggy, 20°C",
    "mumbai": "🌧 Rainy, 28°C",
    "bangalore": "⛅ Cloudy, 25°C"
  };

  let cityLower = city.toLowerCase();

  if (weatherData[cityLower]) {
    result.innerHTML = "Weather in " + city + ": " + weatherData[cityLower];
  } else {
    result.innerHTML = "❌ City not found (Demo version)";
  }
}
