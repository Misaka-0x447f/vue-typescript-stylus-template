import Vue from "vue";
import Host from "./Host.vue";
import router from "./router";

Vue.config.productionTip = false;

// noinspection JSUnusedGlobalSymbols
new Vue({
  router,
  render: (h) => h(Host),
}).$mount("#host");
