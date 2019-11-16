const weatherElement = document.getElementById('weather');
const renderWeather = ({
  weather, wind, main, name, country,
}) => {
  weatherElement.innerHTML = `
    <h1 class="title">Current Weather</h1>
    <header>
      <h1>${name}, ${country} ${main.temp}<sup>o</sup><small>C</small>  ${weather[0].main}</h1>
      <img src="http://openweathermap.org/img/wn/${weather && weather[0].icon}@2x.png" alt="${weather[0].main}">
    </header>
    <h2> wind speed: ${wind.speed}<small>m/s</small> | direction: ${wind.deg}<sup>o</sup></h2>
    <h3>Cloudiness ${weather[0].description} </h3>
    <p>pressure ${main.pressure} hpa | Humidity ${main.humidity} %</p>  
  `;
};

export default renderWeather;