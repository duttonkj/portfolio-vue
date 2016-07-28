<template>
  <header class="c-site-header">
    <h1 class="c-site-header__title">Kevin Dutton</h1>
    <p class="c-site-header__meta">Columbus, OH</p>
  </header>
</template>

<script>
export default {
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ==========================================================================
  Site Header
  ========================================================================== */

/**
*  basic header, but palying with a special display on the intro page only
*/

.c-site-header {
  padding-top: calc($spacingUnit * 4);
  padding-bottom: calc($spacingUnit * 4);
  font-size: 1rem;
  text-align: center;
}

/* Header title
   ========================================================================== */

/**
*
*/

.c-site-header__title {
  display: inline-block;
  margin: 0 auto;
  padding: calc($spacingUnit * 0.2) calc($spacingUnit / 1);
  color: #115953;
  border-bottom: 1px solid #115953;
  border-top: 1px solid #115953;
//  background-color: rgba(17, 89, 83, 0.1);
  font-size: 2em;
  line-height: 1.2;
}

/* Header title
   ========================================================================== */

/**
*
*/

.c-site-header__meta {
  font-size: 0.8em;
}

</style>
