const debounce = (func, delay) => {
  let inDebounce;
  // eslint-disable-next-line func-names
  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};


export default debounce;