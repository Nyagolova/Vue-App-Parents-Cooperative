import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import { firestorePlugin, rtdbPlugin } from 'vuefire'
Vue.use(firestorePlugin, rtdbPlugin )

Vue.config.productionTip = false


import './services/firebaseInit'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
