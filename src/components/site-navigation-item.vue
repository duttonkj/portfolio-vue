<template>
  <div class="site-navigation__item" v-bind:class="[
    'site-navigation__item--' + color,
    {
      'site-navigation__item--home': homeLink
    }
  ]" >
    <a v-link="link" class="site-navigation__link"><slot></slot></a>
  </div>
</template>

<script>
export default {
  props: ['link', 'color', 'homeLink'],
  data () {
    return {
      orange: 'site-navigation__item--orange',
      green: 'site-navigation__item--green',
      blue: 'site-navigation__item--blue',
      purple: 'site-navigation__item--purple',
      ocean: 'site-navigation__item--ocean',
      red: 'site-navigation__item--red'
    }
  },
  computed: {
    home () {
      return 'home-class'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
