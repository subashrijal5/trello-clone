import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import UnauthorizedPage from "./Pages/UnauthorizedPage.vue";

let MountComponent = App;
const checkAccessToken = () => {
  const url = window.location.href;
  const params = new URLSearchParams(url.split("?")[1]);
  const paramValue = params.get("access_token");

  if (paramValue !== process.env.VUE_APP_ACCESS_TOKEN) {
    MountComponent = UnauthorizedPage;
  }
};

const axiosConfig = {
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 30000,
};
Vue.prototype.$axios = axios.create(axiosConfig);
Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    checkAccessToken();
  },
  render: (h) => h(MountComponent),
}).$mount("#app");
