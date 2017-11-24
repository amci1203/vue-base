import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ],
  scrollBehavior (to, from, savedPos) {
    if (savedPos) return savedPos
    if (to.hash) return { selector: to.hash }
    return { x: 0, y: 0 }
  }
})
