import Vue from "vue";
import App from "./App.vue";
import Viewer from "v-viewer";
Vue.use(Viewer);
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  observer: true
});
import "viewerjs/dist/viewer.css";
import "@/gsap";
import "@/fontawesome";
import "@/assets/scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
