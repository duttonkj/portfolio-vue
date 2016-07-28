<template>
  <div class="section-animator">
    <wrap-section id="endorsements" title="Endorsements" color="purple">
      <block-base v-for="endorsement in endorsements">
        <block-header>
          <block-title>
            <href url="{{endorsement.url}}" new-tab="true" decorate="true">{{endorsement.name}}</href>
          </block-title>
          <block-subtitle>{{endorsement.role}}</block-subtitle>
        </block-header>
        <block-content>
          <block-text>{{endorsement.text}}</block-text>
        </block-content>
      </block-base>
    </wrap-section>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'
import WrapSection from './../components/wrap-section'

// We need data for this page, grab the store
import store from './../store'

export default {
  mixins: [BlocksMixin],
  data () {
    return {
      endorsements: store.endorsements
    }
  },
  components: {
    WrapSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
