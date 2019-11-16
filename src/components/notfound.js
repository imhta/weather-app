const weatherElement = document.getElementById('weather');

const renderNotFound = (inputValue) => {
  weatherElement.innerHTML = `<h1>there is no place called ${inputValue}</h1>`;
};

export default renderNotFound;