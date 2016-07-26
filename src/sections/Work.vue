<template>
  <div class="section-animator">
    <wrap-section id="work" title="Selected Work" color="orange">
      <router-view
        class="sub-view"
        keep-alive
        transition
        transition-mode="out-in">
      </router-view>
    </wrap-section>
  </div>
</template>

<script>
import WrapSection from './../components/wrap-section'

export default {
  data () {
    return {}
  },
  components: {
    WrapSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
