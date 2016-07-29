<template>
  <div class="c-site-intro">
        <circle-headline></circle-headline>
        <div class="c-site-intro__banner">
          <h4 class="c-site-intro__subtitle">
            A <underlined-word :accolade.once="accolades[selectedSlot]"></underlined-word>  developer<br/> looking for a <strong>great new opportunity</strong>
          </h4>
            <p class="c-site-intro__footnote"><sup>*</sup>Adjectives used by colleagues to describe Kevin</p>
          </h4>
        </div>
  </div>
</template>

<script>
import CircleHeadline from './circle-headline'
import UnderlinedWord from './underlined-word'

export default {
  components: {
    CircleHeadline,
    UnderlinedWord
  },
  data () {
    return {
      selectedSlot: 0,
      accolades: [
        'true full-stack*',
        'pragmatic*',
        'dedicated*',
        'passionate*'
      ]
    }
  },
  events: {
    'switch-word': function (msg) {
      this.switchWord()
    }
  },
  methods: {
    switchWord () {
      this.selectedSlot += 1
      // check for the end of the array
      if (this.selectedSlot === this.accolades.length) {
        this.selectedSlot = 0
      }
      this.$broadcast('new-word', this.accolades[this.selectedSlot])
    }
  }
}
</script>

<style>
/* ==========================================================================
  Site Navigation
  ========================================================================== */

/**
*  Styles main navigation.  Is a normal inline element until desktop, then become fixed and 2 rails split the navigation from left to right
*/

.c-site-intro {
  will-change: transform;
  padding: calc($spacingUnit * 2) 0 calc($spacingUnit * 2) 0;
  font-size: 0.35rem;
  @media $tablet {
    font-size: 0.6rem;
  }
  @media $wide {
    font-size: 0.8rem;
  }
  @media $xWide {
    //font-size: 1.2rem;
  }
}

/* Subtitle
   ========================================================================== */

/**
 * Split nav evelenly between left and right edge on desktop and above
 */
.c-site-intro__subtitle {
   font-size: 2.5em;
   color: #002F2B;
   margin: calc($spacingUnit / 2) 0;
   text-align: center;
   line-height: 1.3;
 }


/* Footnote
  ========================================================================== */

/**
* Split nav evelenly between left and right edge on desktop and above
*/
.c-site-intro__footnote {
    display:block;
    text-align:center;
    font-size: 0.8em;
    font-weight: normal;
}
</style>
