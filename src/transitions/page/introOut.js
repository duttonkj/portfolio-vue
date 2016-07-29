import animeHelper from './../anime-helper/'

// Main animation paramters
var animation = {
  translateY: {
    value: '110%',
    duration: 600,
    easing: 'easeInSine'
  },
  scale: {
    value: [
      '1.0',
      '0.6'
    ],
    duration: 600,
    easing: 'easeInSine'
  },
  rotate: {
    value: ['0deg', '30deg'],
    easing: 'easeInSine',
    duration: 600
  },
  direction: 'normal',
  loop: false
}

export default animeHelper(animation)
