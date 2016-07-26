<template>
  <div class="sub-section-animator">
    <h1>Work List Will go here</h1>
    <block-base v-for="project in projects">
      <block-header>
        <block-title>{{project.name}}</block-title>
        <block-subtitle>{{project.role}}</block-subtitle>
      </block-header>
      <block-content>
        <block-text>{{{project.description}}}</block-text>
      </block-content>
      <a class="btn btn--action" href="{{project.url}}" target="_blank">View</a>
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
