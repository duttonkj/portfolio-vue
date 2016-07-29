import anime from 'animejs'

var _runAnime = (animation, target, callback) => {
  if (target) {
    var targetApply = {
      targets: target
    }
    animation = Object.assign({}, animation, targetApply)
  }

  // Check for callback and combine object
  if (callback) {
    var complete = {
      complete: callback
    }
    animation = Object.assign({}, animation, complete)
  }

  // Run animation
  return anime(animation)
}

var _removeAnime = (target) => {
  anime.remove(target)
}

export default function (animation) {
  return {
    run (target, callback) {
      _runAnime(animation, target, callback)
    },
    remove (target) {
      _removeAnime(target)
    }
  }
}
