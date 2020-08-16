import Vue from "vue";
import App from "./App.vue";
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
Vue.use(Viewer);
import "@/fontawesome";
import "@/assets/scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
