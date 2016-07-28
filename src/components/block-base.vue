<template>
  <article class="c-block"><slot></slot></article>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ==========================================================================
  Block Wrapper
  ========================================================================== */

/**
*  Individual Nagivation element
*/

.c-block {
  padding-bottom: calc($spacingUnit * 2);
  font-size: 1rem;
  &:lst-of-type {
    padding-bottom: 0;
  }
  @media $desktop {
    font-size: 1.5rem;
  }

    @media $wide {
      font-size: 1.8rem;
    }
}

</style>
