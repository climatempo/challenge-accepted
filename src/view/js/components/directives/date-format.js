/* global Vue */

Vue.directive('dateformat', {
  bind: (el, binding) => {
    const date = binding.value.split('-');
    el.innerHTML = `${date[2]}/${date[1]}/${date[0]}`;
  },
});
