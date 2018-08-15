import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import App from './App.vue';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  store: store(),
  render: h => h(App),
}).$mount('#app');
