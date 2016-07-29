import animeHelper from './../anime-helper/'

// Main animation paramters
var animation = {
  scale: {
    value: ['0', '1'],
    duration: 800,
    elasticity: 80,
    ease: 'easeOutSine'
  },
  direction: 'normal',
  loop: false
}

export default animeHelper(animation)
