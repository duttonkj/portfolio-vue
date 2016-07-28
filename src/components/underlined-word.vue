<template>
  <a v-link="'endorsements'" class="c-underlined-word">
      <span class="c-underlined-word__word-wrapper js-letter js-underline-word" data-letter-count="10">
        <span v-for="char in chars" track-by="$index" class="c-underlined-word__char">{{char}}</span>
      </span>
  </a>
</template>

<script>
import anime from 'animejs'

export default {
  props: ['accolade'],
  computed: {
    chars () {
      console.log(this.accolade)
      return this.accolade.split('')
    }
  },
  events: {
    'new-word': function (newWord) {
      this.animateWordOut(newWord)
    }
  },
  methods: {
    animateWordOut (newWord) {
      console.log('animate word out!')
      anime({
        targets: ['.c-underlined-word__char'],
        translateX: {
          value: '500px',
          duration: 300,
          easing: 'easeInSine',
          delay: function (el, index, total) {
            return (total - index) * 20
          }
        },
        direction: 'normal',
        loop: false,
        complete: () => {
          this.accolade = newWord
          // delay a bit to let the dom cath up
          setTimeout(() => this.animateWordIn(), 400)
        }
      })
    },
    animateWordIn () {
      anime({
        targets: ['.c-underlined-word__char'],
        translateX: {
          value: ['-10em', '0em'],
          duration: 300,
          easing: 'easeOutSine',
          delay: function (el, index, total) {
            return (total - index) * 20
          }
          // easing: 'easeInOutQuad'
        },
        direction: 'normal',
        loop: false
      })
    }
  }
}
</script>

<style >
/* ==========================================================================
  Unerlined word
  ========================================================================== */

/**
*  Structure for animation. dynamically wrap in spans for animating
*/

.c-underlined-word {
  text-decoration: none;
  display: inline-block;
  width: 45%;
  border-bottom: 2px solid $colorLink;
  color: $colorLink;
  overflow: hidden;
  vertical-align: bottom;
}



/* word wrapper
   ========================================================================== */
.c-underlined-word__word-wrapper {
  display: inline-block;
}


/* Character wraper
   ========================================================================== */
.c-underlined-word__char
{
  display: inline-block;
  transform: translateY(5rem);
  will-change: transform;
  color: $colorLink;
}


</style>
