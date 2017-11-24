// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import SmoothScroll from 'vue-scrollto'

import router from './router'
import App from './App'

import PageSection from 'containers/PageSection'
import Wrapper from 'containers/Wrapper'
import Text from 'containers/Text'
import Icon from 'components/Icon'

Vue.config.productionTip = false

;[
  SmoothScroll
].forEach(p => Vue.use(p))
// register all commonly used containers here
// make sure to name your files the same thing as your desired tag name for simple defaults
;[
  PageSection,
  Wrapper,
  Icon,
  Text
].forEach(c => Vue.component(c.name, c))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})
