import Vue from "vue";
import Vuex from "vuex";
import localeStore from "./store/locale";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: [
      localeStore
  ]
});
