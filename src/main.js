import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/css/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AnimateOnVisible from './components/AnimateOnVisible.vue'

Vue.config.productionTip = false
Vue.component('AnimateOnVisible', AnimateOnVisible)

new Vue({
  created () {
    AOS.init()
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
