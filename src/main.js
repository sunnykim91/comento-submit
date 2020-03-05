import Vue from "vue";
import App from "./App.vue";
import Main from "./pages/Main.vue";
import DetailPage from "./pages/DetailContent.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import infiniteScroll from "vue-infinite-scroll";
import VueRouter from "vue-router";

Vue.use(Antd);
Vue.use(infiniteScroll);

Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue();

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/detail/:id",
    component: DetailPage
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
