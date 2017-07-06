import Vue from 'vue'
import App from './App.vue'
import { VTooltip } from 'v-tooltip'

Vue.directive('focus', {
  inserted: el => { el.focus() }
})

Vue.directive('tooltip', VTooltip)

new Vue({
  el: '#app',
  render: h => h(App)
})

