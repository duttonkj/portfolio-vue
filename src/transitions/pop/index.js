
import In from './in'

export default {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    console.log('pop transition ENTER. WHERE IS STAGGER')
    In.run(el, done)
  },
  enterCancelled: function (el) {
    In.remove(el)
  },
  leave: function (el, done) {
    // same as enter
    console.log('pop transition: LEAVE')
  },
  leaveCancelled: function (el) {
  },
  stagger: function (index) {
    // increase delay by 50ms for each transitioned item,
    // but limit max delay to 300ms
    console.log('stagger tranision')
    return index * 5000
  }
}
