import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
      {
          path: "/",
          name: "index",
          meta: {
              title: "Climatempo | Previsões por Localização"
          }
      }
  ]
});

router.afterEach(function (to) {
    document.title = to.meta.title || 'Climatempo';
});

export default router;
