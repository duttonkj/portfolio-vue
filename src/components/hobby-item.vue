<template>
  <div class="hobby"
    v-bind:class="[
    {
      'hobby--hero': isHero,
      'col-1-2': isHero,
      'col-1-4': !isHero
    }
  ]" >
    <slot></slot>
    <span class="hobby__activity-title">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: ['isHero'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
