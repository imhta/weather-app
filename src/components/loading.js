const weatherElement = document.getElementById('weather');

const renderLoading = () => {
  weatherElement.innerHTML = '<h1>loading...</h1>';
};

export default renderLoading;