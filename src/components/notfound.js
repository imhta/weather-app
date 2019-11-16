const weatherElement = document.getElementById('weather');

const renderNotFound = (inputValue, { cod, message }) => {
  weatherElement.innerHTML = `
    <h1>${cod} - ${message}</h1>
    <p class="not-found">there is no city called ${inputValue}</p>
  `;
};

export default renderNotFound;