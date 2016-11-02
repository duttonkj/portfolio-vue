<template>
  <div class="c-work-list c-sub-section-animator">
    <block-base v-for="project in projects">
      <block-header>
        <block-title>{{project.name}}</block-title>
        <block-subtitle>{{project.role}}</block-subtitle>
      </block-header>
      <block-content>
        <block-text>{{{project.description}}}</block-text>
      </block-content>
      <btn :url="project.url" new-tab="true">View</btn>
      <img :src="project.images[0]" />
    </block-base>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'

export default {
  mixins: [BlocksMixin],
  props: ['projects'],
  data () {
    return {}
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
