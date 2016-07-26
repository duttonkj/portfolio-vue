// A little helper for webpack resolve function
import HelpResolve from './resolve'

// Setup route names.  lets use webpack async code splitting to allow our initial download to be as minimal as possible
export default {
  '/': {
    name: 'intro',
    component: HelpResolve('Intro')

  },
  '/about': {
    name: 'about',
    component: HelpResolve('About')
  },
  '/work': {
    name: 'work',
    component: HelpResolve('Work'),
    subRoutes: {
      '/': {
        component: HelpResolve('WorkList')
      },
      '/:idWork': {
        component: HelpResolve('WorkDetail')
      }
    }
  },
  '/protected': {
    component: HelpResolve('WorkBlocked')
  },
  '/outside-work': {
    name: 'outsideWork',
    component: HelpResolve('OutsideWork')
  },
  '/endorsements': {
    name: 'endorsements',
    component: HelpResolve('Endorsements')
  },
  '/recognition': {
    name: 'recognition',
    component: HelpResolve('Recognition')
  },
  '/lets-talk': {
    name: 'letsTalk',
    component: HelpResolve('LetsTalk')

  }
}
