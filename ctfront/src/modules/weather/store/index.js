import state from "./state";
import * as actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
