<template>
  <section class="grid-item grid-item--color-{{color}} match"  data-section="{{identifier}}">
    <header>
      <h4 class="grid-item__headline"><span>{{title}}</span></h4>
    </header>
    <span class="grid-item__wrap">
      <h2>{{msg}}</h2>
      <slot>This is fallback!</slot>
    </span>
  </section>
</template>

<script>
export default {
  props: ['identifier', 'title', 'color'],
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
