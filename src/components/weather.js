const weatherElement = document.getElementById('weather');
// (0°C × 9/5) + 32 = 32°F
const getWeatherByUnit = (weather, unit) => {
  if (unit === 'C') {
    return weather;
  }
  return ((weather * (9 / 5)) + 32).toFixed(2);
};
const renderWeather = ({
  weather, wind, main, name, country,
}, unit) => {
  weatherElement.innerHTML = `
    <h1 class="title">Current Weather</h1>
    <header>
      <h1>${name}, ${country} ${getWeatherByUnit(Number(main.temp), unit)}<sup>o</sup><small>${unit}</small>  ${weather[0].main}</h1>
      <img src="http://openweathermap.org/img/wn/${weather && weather[0].icon}@2x.png" alt="${weather[0].main}">
    </header>
    <h2> wind speed: ${wind.speed}<small>m/s</small> | direction: ${wind.deg}<sup>o</sup></h2>
    <h3>Cloudiness ${weather[0].description} </h3>
    <p>pressure ${main.pressure} hpa | Humidity ${main.humidity} %</p>  
  `;
};

export default renderWeather;