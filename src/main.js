import Vue from 'vue'
import VueRouter from 'vue-router'

import Routes from './routes/'

// Main appplication component
import App from './App'

// Hooks for router
import AuthHook from './routes/authHook'
import ScrollHook from './routes/scrollHook'

// Init the router component
Vue.use(VueRouter)
var router = new VueRouter({
  history: true
})

// Add routes
router.map(Routes)

// Small hook to scroll to top on each section transition
router.beforeEach(ScrollHook)

// Auth hook.  Only run if named route matches.
router.beforeEach(AuthHook)

// Kick off the app!
router.start(App, '#portfolio')
