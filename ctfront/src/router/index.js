import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./router";

Vue.use(VueRouter);

const Router = new VueRouter({
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
});

export default Router;
