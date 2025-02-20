const $ = (element) => document.querySelector(element);

const API_KEY = "86df389f6c764d758c9234935251902";
// http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country}

// Dark theme config
const $darkTheme = $("#theme-button");
const body = document.body;

const $locationInput = $("#location-input");
const $searchButton = $("#search-button");

const $cityName = $("#city-name");
const $temperature = $("#temperature");
const $weatherCondition = $("#weather-condition");
const $humidity = $("#humidity");
const $windSpeed = $("#wind-speed");

$darkTheme.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    $darkTheme.textContent = "☀️ Light Mode";
  } else {
    $darkTheme.textContent = "🌑 Dark Mode";
  }
});

const fetchData = async (query) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed fetching data:", error.message);
    return null;
  }
};

$searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const { value } = $locationInput;

  if (!value) {
    alert("Please enter a valid location");
    return;
  }

  const data = await fetchData(value);

  const { name } = data.location;
  const { temp_c, wind_kph, humidity } = data.current;
  const { text } = data.current.condition;

  if (data) {
    $cityName.innerHTML = name;
    $temperature.innerHTML = `${temp_c}°C`;
    $weatherCondition.innerHTML = text;
    $humidity.innerHTML = `Humidity: ${humidity}%`;
    $windSpeed.innerHTML = `Wind: ${wind_kph} km/h`;
  }
});
