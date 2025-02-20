const $ = (element) => document.querySelector(element);

const API_KEY = "86df389f6c764d758c9234935251902";
// http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country}

// Dark theme config
const $darkTheme = $("#theme-button");
const body = document.body;

$darkTheme.addEventListener("click", () => {
  body.classList.toggle('dark-theme')
  if (body.classList.contains('dark-theme')){
    $darkTheme.textContent = "☀️ Light Mode"
  } else {
    $darkTheme.textContent = "🌑 Dark Mode"
  }
});
