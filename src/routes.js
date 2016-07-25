
// Include the intro module with base code
import Intro from './sections/Intro'

let baseSection = './sections/'

// Setup route names.  lets use webpack async code splitting to allow our initial download to be as minimal as possible
export default {
  '/': {
    name: 'intro',
    component: Intro
  },
  '/about': {
    name: 'about',
    component (resolve) {
      require([baseSection + 'About.vue'], resolve)
    }
  },
  '/work': {
    name: 'work',
    component (resolve) {
      require([baseSection + 'Work.vue'], resolve)
    }
  },
  '/outside-work': {
    name: 'outsideWork',
    component (resolve) {
      require([baseSection + 'OutsideWork.vue'], resolve)
    }
  },
  '/endorsements': {
    name: 'endorsements',
    component (resolve) {
      require([baseSection + 'Endorsements.vue'], resolve)
    }
  },
  '/recognition': {
    name: 'recognition',
    component (resolve) {
      require([baseSection + 'Recognition.vue'], resolve)
    }
  },
  '/lets-talk': {
    name: 'letsTalk',
    component (resolve) {
      require([baseSection + 'LetsTalk.vue'], resolve)
    }
  }
}
