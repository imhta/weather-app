const weatherElement = document.getElementById('weather');

const renderNotFound = (inputValue) => {
  weatherElement.innerHTML = `<h1 class="not-found">there is no place called ${inputValue}</h1>`;
};

export default renderNotFound;