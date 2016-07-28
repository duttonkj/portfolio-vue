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
    value: direction['fromLeft'].exiting,
    duration: 220,
    delay: 0,
    elasticity: 0,
    easing: 'easeInSine'
  },
  // scale: {
  //   value: ['1.0','0.6'],
  //   duration: 300,
  //   elasticity: 0,
  //   easing: 'easeInSine'
  // },
  direction: 'normal',
  loop: false
}

export default animeBase(animation)
