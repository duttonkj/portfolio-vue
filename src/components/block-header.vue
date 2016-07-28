<template>
  <header class="c-block__header"><slot></slot></header>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ==========================================================================
  Block header
  ========================================================================== */

/**
*  Wrapping for block header component. Provide spacing and decorations
*/

.c-block__header {
  padding: $spacingUnit 0;
  border-bottom: 4px solid $colorBorderSecondary;
}

</style>
