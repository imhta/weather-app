import fetchWeather from './service/weather';
import renderWeather from './components/weather';
import renderNotFound from './components/notfound';
import renderLoading from './components/loading';
import debounce from './shared/debounce';
import renderEmpty from './components/empty';
import './scss/main.scss';

const cityInputField = document.getElementById('city-input');
const toggleElement = document.getElementById('toggle');
let currentData;
let currentUnit = 'C';

cityInputField.addEventListener('keyup', debounce(({ target }) => {
  if (target.value.replace(/\s/g, '').length) {
    renderLoading();
    fetchWeather(target.value).then((data) => {
      if (data.error.cod === 200) {
        currentData = data;
        renderWeather(data, currentUnit);
      } else {
        currentData = undefined;
        renderNotFound(target.value, data.error);
      }
    });
  } else {
    currentData = undefined;
    renderEmpty();
  }
}, 300));

toggleElement.addEventListener('click', ({ target }) => {
  // eslint-disable-next-line no-console
  currentUnit = target.id;
  if (currentData) {
    renderWeather(currentData, currentUnit);
  }
});