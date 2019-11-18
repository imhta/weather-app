/* eslint-disable func-names */
const toggle = function () {
  this.currentState = this.currentState === 'celsius' ? 'fahrenheit' : 'celsius';
  document.getElementById(this.currentState).classList.push('is-selected');
};

export default toggle;