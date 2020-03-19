import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/index';
//to install bootstrap run this is the commetn section: 
// npm install bootstrap-vue bootstrap --save

//import bootstrap
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//then use it with Vue.use(BootstrapVue)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
