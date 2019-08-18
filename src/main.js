import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {  rtdbPlugin as VueFire  } from 'vuefire'

Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueFire,
  render: h => h(App)
}).$mount('#app')
