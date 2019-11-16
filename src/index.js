import fetchWeather from './service/weather';
import renderWeather from './components/weather';
import renderNotFound from './components/notfound';
import renderLoading from './components/loading';
import debounce from './shared/debounce';
import renderEmpty from './components/empty';


const cityInputField = document.getElementById('city-input');

cityInputField.addEventListener('keyup', debounce(({ target }) => {
  if (target.value.replace(/\s/g, '').length) {
    renderLoading();
    fetchWeather(target.value).then((data) => {
      if (data.name) {
        renderWeather(data);
      } else {
        renderNotFound(target.value);
      }
    });
  } else {
    renderEmpty();
  }
}, 300));
