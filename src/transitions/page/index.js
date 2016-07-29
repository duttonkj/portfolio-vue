
import pageIn from './in'
import pageOut from './out'
import introIn from './introIn'
import introOut from './introOut'

var _checkForIntro = (el) => {
  var pageId = el.getAttribute('data-page')
  return pageId === 'intro'
}

export default {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    console.log('page transition ENTER')
    if (_checkForIntro(el)) {
      introIn.run(el, done)
    } else {
      pageIn.run(el, done)
    }
  },
  enterCancelled: function (el) {
    pageIn.remove(el)
  },
  leave: function (el, done) {
    // same as enter
    console.log('pageTransition: LEAVE')
    if (_checkForIntro(el)) {
      introOut.run(el, done)
    } else {
      pageOut.run(el, done)
    }
  },
  leaveCancelled: function (el) {
    pageOut.remove(el)
  }
}
