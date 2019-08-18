import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {  rtdbPlugin as VueFire , firestorePlugin  } from 'vuefire'

Vue.use(VueFire, firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueFire,
  firestorePlugin,
  render: h => h(App)
}).$mount('#app')
