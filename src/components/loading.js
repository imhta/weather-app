const weatherElement = document.getElementById('weather');

const renderLoading = () => {
  weatherElement.innerHTML = '<div class="loading">loading...</div>';
};

export default renderLoading;