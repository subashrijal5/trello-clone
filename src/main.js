import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import UnauthorizedPage from "./Pages/UnauthorizedPage.vue";
import VModal from 'vue-js-modal'

let MountComponent = App;

function getParamAccessToken(){
  const url = window.location.href;
  const params = new URLSearchParams(url.split("?")[1]);
  return  params.get("access_token");
}
const checkAccessToken = () => {
  if (getParamAccessToken() !== process.env.VUE_APP_ACCESS_TOKEN) {
    MountComponent = UnauthorizedPage;
  }
};



const axiosConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  params: {
    access_token: getParamAccessToken()
  },
  timeout: 30000,
};
Vue.prototype.$axios = axios.create(axiosConfig);
Vue.config.productionTip = false;
Vue.use(VModal)
new Vue({
  beforeCreate() {
    checkAccessToken();
  },
  render: (h) => h(MountComponent),
}).$mount("#app");
