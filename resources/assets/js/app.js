require('./bootstrap');
window.Vue = require('vue');
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.component('auto-complete', require('./components/AutoComplete.vue'));
Vue.component('card', require('./components/Card.vue'));
Vue.filter('date', (date) => { if (date) { var data = new Date(date); var dia = data.getDate(); if (dia < 10) { dia = "0" + dia; } var mes = data.getMonth() + 1; if (mes < 10) { mes = "0" + mes; } return dia + "/" + mes + "/" + data.getFullYear(); } });

const app = new Vue({
    el: '#app',
    data: () => ({ weathers: [], selectedWeather: null }),
    methods: {
        onSelect(id) {
            this.selectedWeather = null;
            axios.get(`./weather/${id}`).then((response) => { 
                this.selectedWeather = response.data.weather; 
            }).catch((error) => { alert("Ocorreu um erro ao tentar carregar as previsões do tempo"); });
            // this.selectedWeather = this.weathers.filter(item => { if (item.locale.id == id) return item; })[0].weather;
        }
    }
});