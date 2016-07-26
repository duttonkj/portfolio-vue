<template>
  <div class="grid-item grid-item--color-{{color}} match"  data-section="{{identifier}}">
    <h4 class="grid-item__headline"><span>{{title}}</span></h4>
    <span class="grid-item__wrap">
      <h2>{{msg}}</h2>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ['identifier', 'title', 'color'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
