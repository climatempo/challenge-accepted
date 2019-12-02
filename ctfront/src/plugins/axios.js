import axios from "axios";

export default {
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      timeout: 300000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*"
      }
    });
  }
};
