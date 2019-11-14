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

// eslint-disable-next-line no-unused-vars
const fetchWeather = async (city) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0afb0e9dce5d994d7f33ebdcc4202375`);
  const data = await res.json();
  const {
    weather, wind, main, name,
  } = data;
  return {
    weather, wind, main, name,
  };
};


document.getElementById('city-input').addEventListener('keyup', debounce(({ target }) => {
  // eslint-disable-next-line no-console
  console.log(fetchWeather(target.value));
}, 300));
