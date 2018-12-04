import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// noinspection JSUnusedGlobalSymbols
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      // lazy load
      component: () => import("./pages/Home/index.vue"),
    }
  ],
});
