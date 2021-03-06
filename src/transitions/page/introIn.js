import animeHelper from './../anime-helper/'

// Main animation paramters
var animation = {
  translateY: {
    value: ['100%', '0%'],
    duration: 600,
    easing: 'easeOutSine'
  },
  scale: {
    value: [
      '0.9',
      '1.0'
    ],
    duration: 600
  },
  rotate: {
    value: ['-30deg', '0deg'],
    easing: 'easeOutSine',
    duration: 600

  },
  direction: 'normal',
  loop: false
}

export default animeHelper(animation)
