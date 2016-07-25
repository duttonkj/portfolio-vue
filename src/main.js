import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

// Main appplication component
import App from './App'

// Init the router component
Vue.use(VueRouter)
var router = new VueRouter({
  history: true
})

// Add routes
router.map(routes)

// Kick off the app!
router.start(App, '#portfolio')
