<template>
  <div class="site-intro">
        <div class="site-intro__banner site-intro__banner--top">
          <h1 class="site-intro__title">Kevin Dutton</h1>
        </div>
        <circle-headline></circle-headline>
        <div class="site-intro__banner site-intro__banner--bottom">
          <h4 class="site-intro__subtitle">
          <!-- <div class="site-intro__contact">
              <a href="#" class="decorate">hello@kevindutton.com</a>
          </div> -->

          A <a href="#about" class="underlined-word">
              <span class="underlined-word__attribute js-letter js-underline-word" data-letter-count="10">true full-stack*</span>
            </a>
            developer<br/> looking for a <strong>great new opportunity</strong></h2>
            <p class="site-intro__footnote"><sup>*</sup>Adjectives used by colleagues to describe Kevin</p>
          </h4>
        </div>
  </div>
</template>

<script>
import CircleHeadline from './circle-headline'

export default {
  components: {
    CircleHeadline
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
