<template>
  <div class="section-animator">
    <wrap-section id="lets-talk" title="Let's Talk" color="red">
      <block-base>
        <block-content>
          <block-text hero="true">
            <a class="decorate" href="tel:+6142664669">614-266-4669</a>
          </block-text>
          <block-text hero="true">
            <a class="decorate" href="mailto:hello@kevindutton.com">hello@kevindutton.com</a>
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
