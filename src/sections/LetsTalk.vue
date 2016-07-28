<template>
  <div class="section-animator">
    <wrap-section id="lets-talk" title="Let's Talk" color="red">
      <block-base>
        <block-content>
          <block-text hero="true">
            <href url="tel:+6142664669" decorate="true">614-266-4669</href>
          </block-text>
          <block-text hero="true">
            <href url="mailto:hello@kevindutton.com" decorate="true">hello@kevindutton.com</href>
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
<style>

</style>
