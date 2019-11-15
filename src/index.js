const debounce = (func, delay) => {
  let inDebounce;
  // eslint-disable-next-line func-names
  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};


const fetchWeather = async (city) => {
  const {
    weather, wind, main, name, cod, message,
  } = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0afb0e9dce5d994d7f33ebdcc4202375`)
    .then((res) => res.json()
      .then((data) => data)
      .catch((error) => error))
    .catch((error) => error);
  return {
    weather, wind, main, name, error: { cod, message },
  };
};


document.getElementById('city-input').addEventListener('keyup', debounce(({ target }) => {
  // eslint-disable-next-line no-console
  fetchWeather(target.value).then((data) => {
    document.getElementById('weather').innerText = JSON.stringify(data);
  });
}, 300));
