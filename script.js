const weatherResult = document.getElementById("weatherResult");
const citySelect = document.getElementById("citySelect");

function getWeather(city) {
  const fakeData = {
    Bucuresti: "25°C, sunny",
    Timisoara: "22°C, cloudy",
    Iasi: "20°C, windy",
    Arad: "23°C, clear sky",
    Sibiu: "19°C, light rain"
  };

  weatherResult.textContent = `Weather in ${city}: ${fakeData[city]}`;
}

citySelect.addEventListener("change", () => {
  const selected = citySelect.value;
  switch (selected) {
    case "bucuresti":
      getWeather("Bucuresti");
      break;
    case "timisoara":
      getWeather("Timisoara");
      break;
    case "iasi":
      getWeather("Iasi");
      break;
    case "arad":
      getWeather("Arad");
      break;
    case "sibiu":
      getWeather("Sibiu");
      break;
  }
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});