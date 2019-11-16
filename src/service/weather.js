const fetchWeather = async (city) => {
  const {
    weather, wind, main, name, cod, message, sys,
  } = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0afb0e9dce5d994d7f33ebdcc4202375`)
    .then((res) => res.json()
      .then((data) => data)
      .catch((error) => error))
    .catch((error) => error);
  return {
    weather, wind, main, name, error: { cod, message }, country: sys.country,
  };
};

export default fetchWeather;