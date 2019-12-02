import Vue from "vue";

export const ActionGetLocales = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get("locale/find/" + payload).then(
      response => {
        commit("SET_LOCALES", response.data.data);
        resolve(response.data.data);
      },
      error => {
        reject(error.response.data);
      }
    );
  });
};

export const ActionEmptyLocales = ({ commit }) => {
    commit("SET_LOCALES", []);
};

export const ActionGetWeather = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get("weather/" + payload).then(
      response => {
        commit("SET_WEATHER", response.data.data);
        resolve(response.data.data);
      },
      error => {
        reject(error.response.data);
      }
    );
  });
};

