<template>
  <div class="section-animator">
    <wrap-section id="recognition" title="Recognition" color="ocean">
      <block-base>
        <block-header>
          <block-title>Superman Award</block-title>
        </block-header>
        <block-content>
          <block-text>
            <mark>Recognized</mark> with the Superman Award for overall embodiment of company values and someone who keeps things on track, rolls up sleeves when necessary, and goes to battle for the good of the team.
          </block-text>
          <block-text>
            <img class="o-block_image u-margin-top" src="https://s3.amazonaws.com/blaston-llc/superman-award-lowfi.jpg" />
          </block-text>
        </block-content>
      </block-base>
    </wrap-section>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'
import WrapSection from './../components/wrap-section'

export default {
  mixins: [BlocksMixin],
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
