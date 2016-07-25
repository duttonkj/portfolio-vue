<template>
  <p class="block__text" v-bind:class="{ 'block__text--hero': hero }"><slot></slot></p>
</template>

<script>
export default {
  props: ['hero']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
