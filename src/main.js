import Vue from 'vue'
import VueRouter from 'vue-router'

import Routes from './routes/'

// Main appplication component
import App from './App'

// Hooks for router
import AuthHook from './routes/hooks/auth'
import ScrollHook from './routes/hooks/scroll'

// Custom transitions
import PageTransition from './transitions/page/'
import PopTransition from './transitions/pop/'

// Register transitions with Vue
Vue.transition('page', PageTransition)
Vue.transition('pop', PopTransition)

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
