<template>
  <div class="section-animator">
    <div v-if="$loadingRouteData">...Fetching Projects...</div>
    <wrap-section id="work" title="Selected Work" color="orange" v-else>
      <router-view
        class="sub-view"
        keep-alive
        transition
        transition-mode="out-in"
        :projects="projects"
        >
      </router-view>
    </wrap-section>
  </div>
</template>

<script>
import WrapSection from './../components/wrap-section'

// Get store to access work data
import Store from './../store/'

export default {
  data () {
    return {
      projects: []
    }
  },
  // Load in data needed for work section from api
  route: {
    data: ({to: {params: { workId }}}) => ({
      projects: Store.fetchWork()
    })
  },
  components: {
    WrapSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
