export default (delay) => {
  let timeoutId = null;
  return (callback) => {
    const context = this;
    const args = arguments;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};
