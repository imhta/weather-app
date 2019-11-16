import fetchWeather from './service/weather';
import renderWeather from './components/weather';
import renderNotFound from './components/notfound';
import renderLoading from './components/loading';
import debounce from './shared/debounce';
import renderEmpty from './components/empty';
import './scss/main.scss';

const cityInputField = document.getElementById('city-input');

cityInputField.addEventListener('keyup', debounce(({ target }) => {
  if (target.value.replace(/\s/g, '').length) {
    renderLoading();
    fetchWeather(target.value).then((data) => {
      if (data.error.cod === 200) {
        renderWeather(data);
      } else {
        renderNotFound(target.value, data.error);
      }
    });
  } else {
    renderEmpty();
  }
}, 300));
