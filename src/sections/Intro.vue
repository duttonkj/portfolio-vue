<template>
  <div class="section-animator" data-page="intro">
    <site-intro></site-intro>
  </div>
</template>

<script>
import SiteIntro from './../components/site-intro'
import anime from 'animejs'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      isAnimating: true,
      rotateDegrees: 0
    }
  },
  components: {
    SiteIntro
  },
  ready () {
    this.animateCircle()
  },
  route: {
    activate ({ next }) {
      if (!this.isAnimating) {
        this.animateCircle()
      }
      next()
    },
    deactivate () {
      console.log('REMOVE ANIMATIONS')
      anime.remove('.js-circle-headline__svg')
      this.isAnimating = false
    }
  },
  methods: {
    animateCircle () {
      // increment in 180's
      this.rotateDegrees -= 180
      console.log('animate circle')
      console.log(this.rotateDegrees)
      console.log(anime.easings)
      let animeDuration = 1200
      anime({
        targets: ['.js-circle-headline__svg'],
        rotate: {
          value: this.rotateDegrees,
          duration: animeDuration,
          easing: 'easeOutSine'
        },
        delay: 2000,
        loop: false,
        begin: () => {
          this.$broadcast('switch-word')
        },
        complete: () => {
          this.animateCircle(this.rotateDegrees)
        }
        // Lets loop manually to allow random functions to change animation
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
