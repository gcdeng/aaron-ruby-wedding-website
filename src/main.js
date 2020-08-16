import Vue from "vue";
import App from "./App.vue";
import "@/fontawesome";
import "@/assets/scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
