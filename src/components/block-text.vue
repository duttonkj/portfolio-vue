<template>
  <p class="c-block__text" v-bind:class="{ 'c-block__text--hero': hero }"><slot></slot></p>
</template>

<script>
export default {
  props: ['hero']
}
</script>

<style scoped>
/* ==========================================================================
  Block Text
  ========================================================================== */

/**
*  Typeset for content
*/

.c-block__text {
  margin: 0 0 calc($spacingUnit / 2) 0;
  line-height: $lineHeight;
  font-size: 0.9em;
}


/* Larger hero version
   ========================================================================== */

.c-block__text--hero {
  font-size: 1.6em
}

</style>
