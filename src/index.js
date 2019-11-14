async function fetchWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0afb0e9dce5d994d7f33ebdcc4202375`);
  const data = await res.json();
  const {
    weather, wind, main, name,
  } = data;
  return {
    weather, wind, main, name,
  };
}


document.addEventListener('keyup', ({ target }) => {
  // eslint-disable-next-line no-console
  console.log(fetchWeather(target.value));
});