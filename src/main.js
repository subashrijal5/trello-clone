import axios from 'axios';
import Vue from 'vue'
import App from './App.vue'


const axiosConfig = {
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 30000,
};
Vue.prototype.$axios = axios.create(axiosConfig)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
