/* eslint-disable func-names */
const fElement = document.getElementById('F');
const cElement = document.getElementById('C');
const reset = (currentUnit) => {
  if (currentUnit === 'C') {
    fElement.className = '';
  } else {
    cElement.className = '';
  }
};
const toggleWeatherUnit = function (currentUnit) {
  reset(currentUnit);
  document.getElementById(currentUnit).className = 'is-selected';
};

export default toggleWeatherUnit;