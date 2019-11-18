/* eslint-disable func-names */
const toggleWeatherUnit = function () {
  this.currentState = this.currentState === 'celsius' ? 'fahrenheit' : 'celsius';
  document.getElementById(this.currentState).classList.push('is-selected');
  return this.currentState;
};

export default toggleWeatherUnit;