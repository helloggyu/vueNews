import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import { store } from './store/index';


new Vue({
  render:h=>h(App),
  router,
  store
}).$mount('#app');

