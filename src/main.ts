/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 10:21:38
 * @LastEditTime: 2019-10-10 10:24:59
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
