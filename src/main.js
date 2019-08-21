import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {  rtdbPlugin as VueFire , firestorePlugin  } from 'vuefire'
import VeeValidate from 'vee-validate';


Vue.use(VueFire, firestorePlugin)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueFire,
  firestorePlugin,
  render: h => h(App)
}).$mount('#app')
