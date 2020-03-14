import Vue from 'vue';
import App from './App';
import router from './router';
import './style/element-variables.scss';
//引入 Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
//
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
