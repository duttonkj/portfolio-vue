<template>
  <header class="site-header">
        <span class="grid-item__wrap">

        <section class="circle-headline">
          <div class="circle-headline__container">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
                <defs>
                    <path id="criclePath" d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "/>
                </defs>
                <circle class="circle-headline__text-path" cx="150" cy="150" r="125" fill="#115953" stroke="none" stroke-width="5"/>
                <g>
                    <use xlink:href="#criclePath" fill="none"/>
                    <text class="circle-headline__text circle-headline__text--name" fill="#115953">
                        <textPath xlink:href="#criclePath">FRONT-END</textPath>
                    </text>
                    <text class="circle-headline__text circle-headline__text--name" fill="#115953">
                        <textPath startOffset="50.5%" xlink:href="#criclePath">DEVELOPER</textPath>
                    </text>
                </g>
            </svg>
            <img class="circle-headline__profile circle-headline__profile--developer" src="https://s3.amazonaws.com/blaston-llc/profile-pic-520.jpg" />
          </div>
        </section>

        <div class="site-header__banner site-header__banner--top">
          <h1 class="site-header__title">Kevin Dutton</h1>
        </div>

        <div class="site-header__banner site-header__banner--bottom">
          <h4 class="site-header__subtitle">
          <!-- <div class="site-header__contact">
              <a href="#" class="decorate">hello@kevindutton.com</a>
          </div> -->

          A <a href="#about" class="underlined-word">
              <span class="underlined-word__attribute js-letter js-underline-word" data-letter-count="10">true full-stack*</span>
            </a>
            developer<br/> looking for a <strong>great new opportunity</strong></h2>
            <p class="site-header__footnote"><sup>*</sup>Adjectives used by colleagues to describe Kevin</p>
          </h4>
        </div>
      </span>
  </header>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Intro View!'
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
