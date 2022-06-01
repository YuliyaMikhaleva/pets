import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.scss'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import MasonryWall from '@yeger/vue2-masonry-wall'
import VueMask from 'v-mask';

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;
Vue.use(Donut)
Vue.use(MasonryWall)
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
