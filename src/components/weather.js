const weatherElement = document.getElementById('weather');
const renderWeather = ({
  weather, wind, main, name, error,
}) => {
  weatherElement.innerHTML = `
    <h1>${name}</h1>
    <h2> wind ${JSON.stringify(wind)}</h2>
    <img src="http://openweathermap.org/img/wn/${weather && weather[0].icon}@2x.png">
    <p>weather ${JSON.stringify(weather)}</p>
    <p>weather ${JSON.stringify(main)}</p>
    <p>error ${JSON.stringify(error)}</p>
  
  `;
};

export default renderWeather;