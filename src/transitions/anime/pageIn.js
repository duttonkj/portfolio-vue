import animeBase from './base'

var direction = {
  fromLeft: {
    exiting: ['0%', '400%'],
    entering: ['-100%', '0%']
  },
  fromRight: {
    exiting: ['0%', '-400%'],
    entering: ['100%', '0%']
  }
}

// Main animation paramters
var animation = {
  translateX: {
    value: direction['fromLeft'].entering,
    delay: 0,
    elasticity: 80,
    easing: 'easeOutSine'
  },
  duration: 300,
  direction: 'normal',
  loop: false
}

export default animeBase(animation)
