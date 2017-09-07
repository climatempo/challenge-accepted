// Bootstrap
//window.$ = window.jQuery = require('jquery');
//require('bootstrap-sass');

// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Vue
window.Vue = require('vue');

// Vue Components
const Weather = require('./components/Weather.vue');

const app = new Vue({
    el: '#app',
    components: { Weather }
});
