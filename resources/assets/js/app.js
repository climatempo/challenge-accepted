// Bootstrap
require('bootstrap-sass');

// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Vue
window.Vue = require('vue');

const app = new Vue({
    el: '#app'
});
