
import pageIn from './anime/pageIn'
import pageOut from './anime/pageOut'

export default {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    console.log('page transition ENTER')
    pageIn.run(el, done)
  },
  enterCancelled: function (el) {
    pageIn.remove(el)
  },
  leave: function (el, done) {
    // same as enter
    console.log('pageTransition: LEAVE')
    pageOut.run(el, done)
  },
  leaveCancelled: function (el) {
    pageOut.remove(el)
  }
}
