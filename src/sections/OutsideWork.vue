<template>
  <div class="section-animator">
    <wrap-section id="outside-work" title="Interests Outside of Work" color="green">
      <block-base>
        <block-content>
          <block-text hero="true">
            I believe time away from the screen is important and beneficial. I attempt to find a balance by taking my family on outdoor excursions.
          </block-text>
          <div class="o-layout">
            <hobby-item activity="Mountain Biking" is-hero="true">{{{svg.mountainBike}}}</hobby-item>
            <hobby-item activity="Canoeing">{{{svg.canoeing}}}</hobby-item>
            <hobby-item activity="Camping">{{{svg.camping}}}</hobby-item>
          </div>
          <div class="o-layout">
            <hobby-item activity="Skiing" is-hero="true">{{{svg.skiing}}}</hobby-item>
            <hobby-item activity="Hiking">{{{svg.hiking}}}</hobby-item>
            <hobby-item activity="Soccer">{{{svg.soccer}}}</hobby-item>
          </div>
        </block-content>
      </block-base>
    </wrap-section>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'
import WrapSection from './../components/wrap-section'

// Get hobby template
import HobbyItem from './../components/hobby-item'

// Get SVGS
// TODO:  NEED TO FIND A BETTER WAY TO HANDLE THIS
import MountainBike from './../assets/svg/mountain-bike.svg'
import Canoeing from './../assets/svg/canoeing.svg'
import Camping from './../assets/svg/camping.svg'
import Hiking from './../assets/svg/hiking.svg'
import Skiing from './../assets/svg/skiing.svg'
import Soccer from './../assets/svg/soccer.svg'

// Lets try some animations
import anime from 'animejs'

export default {
  mixins: [BlocksMixin],
  data () {
    return {
      svg: {
        mountainBike: MountainBike,
        canoeing: Canoeing,
        camping: Camping,
        hiking: Hiking,
        skiing: Skiing,
        soccer: Soccer
      }
    }
  },
  components: {
    WrapSection,
    HobbyItem
  },
  beforeDestroy () {
    // anime.remove('.c-hobby__icon')
  },
  route: {
    activate ({ next }) {
      console.log('start animations')
      this.animateBike()
      this.animateSkis()
      this.animateCanoes()
      this.animateCamp()
      this.animateSoccer(anime.random(-5, 5) + 'rem', anime.random(-5, 5) + 'rem')
      this.animateHiking()
      next()
    },
    deactivate () {
      console.log('REMOVE ANIMATIONS')
      anime.remove('.c-hobby__icon')
    }
  },
  methods: {
    animateBike () {
      console.log('animate Bike')
      let animeDuration = 6000
      anime({
        targets: ['.js-svg--mountain-bike'],
        translateX: {
          value: ['-20rem', '20rem'],
          duration: animeDuration,
          easing: 'easeInQuad'
        },
        translateY: {
          value: anime.random(-10, 10),
          duration: animeDuration,
          easing: 'easeInOutQuad'
        },
        rotate: {
          value: anime.random(-35, 15),
          duration: animeDuration,
          easing: 'easeInOutQuad'
        },
        loop: false,
        // Lets loop manually to allow random functions to change animation
        complete: () => {
          this.animateBike()
        }
      })
    },
    animateSkis () {
      console.log('animate skis')
      let animeDuration = 4000
      anime({
        targets: ['.js-svg--skiing'],
        translateX: {
          value: [anime.random(-10, 10) + 'rem', anime.random(-10, 10) + 'rem'],
          duration: animeDuration,
          easing: 'easeInQuad'
        },
        translateY: {
          value: ['-20rem', '20rem'],
          duration: animeDuration,
          easing: 'easeInOutQuad'
        },
        // rotate: {
        //   value: anime.random(-35, 35),
        //   duration: animeDuration,
        //   easing: 'easeInOutQuad'
        // },
        loop: false,
        // Lets loop manually to allow random functions to change animation
        complete: () => {
          this.animateSkis()
        }
      })
    },
    animateCanoes () {
      console.log('animate canoes')
      let animeDuration = 600
      anime({
        targets: ['.js-svg--canoe'],
        // translateY: {
        //   value: ['0.5rem', '-0.5rem'],
        //   duration: animeDuration
        // },
        rotate: {
          value: -2,
          duration: animeDuration
        },
        loop: true,
        direction: 'alternate'
      })
    },
    animateCamp () {
      console.log('animate camp')
      let animeDuration = 1900
      anime({
        targets: ['.js-svg--camping'],
        translateY: {
          value: ['3rem', '0rem'],
          duration: animeDuration
        },
        scale: {
          value: [0, 1],
          duration: animeDuration
        },
        delay: 1200,
        elasticity: 800,
        loop: false,
        // Lets loop manually to allow random functions to change animation
        complete: () => {
          this.animateCampDown()
        }
      })
    },
    animateCampDown () {
      console.log('animate camp')
      let animeDuration = 1900
      anime({
        targets: ['.js-svg--camping'],
        translateY: {
          value: ['0rem', '3rem'],
          duration: animeDuration
        },
        scale: {
          value: [1, 0],
          duration: animeDuration
        },
        // opacity: {
        //   value: 0,
        //   duration: animeDuration
        // },
        delay: 1200,
        elasticity: 200,
        loop: false,
        // Lets loop manually to allow random functions to change animation
        complete: () => {
          this.animateCamp()
        }
      })
    },
    animateHiking () {
      console.log('animate hiking')
      let animeDuration = 800
      anime({
        targets: ['.js-svg--hiking'],
        rotate: {
          value: anime.random(-20, 20),
          duration: animeDuration,
          easing: 'easeInOutQuad'
        },
        // opacity: {
        //   value: 0,
        //   duration: animeDuration
        // },
        delay: 900,
        elasticity: 200,
        loop: false,
        // Lets loop manually to allow random functions to change animation
        complete: () => {
          this.animateHiking()
        }
      })
    },
    animateSoccer (fromX, fromY) {
      console.log('animate camp')
      let animeDuration = 1200
      anime.remove('.js-svg--soccer')
      console.log(this.randomRem)
      let toX = anime.random(-5, 5) + 'rem'
      let toY = anime.random(-5, 5) + 'rem'
      anime({
        targets: ['.js-svg--soccer'],
        translateY: {
          value: [fromY, toY],
          duration: animeDuration
        },
        translateX: {
          value: [fromX, toX],
          duration: animeDuration
        },
        rotate: {
          value: anime.random(0, 500)
        },

        // opacity: {
        //   value: 0,
        //   duration: animeDuration
        // },
        elasticity: 200,
        loop: false,
        // Lets loop manually to allow random functions to change animation
        complete: () => {
          this.animateSoccer(toX, toY)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
