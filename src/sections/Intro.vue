<template>
  <div class="section-animator">
    <site-intro></site-intro>
  </div>
</template>

<script>
import SiteIntro from './../components/site-intro'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Intro View!'
    }
  },
  components: {
    SiteIntro
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
