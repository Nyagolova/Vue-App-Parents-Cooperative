import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { authService } from '@/services/AuthenticationServices'

Vue.config.productionTip = false

Vue.mixin(authService);


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
