<template>
  <a class="c-btn" :href="url ? url : null" :target="newTab ? '_blank' : null"><slot></slot></a>
</template>

<script>
export default {
  props: ['isPrimary', 'url', 'newTab']
}
</script>

<style scoped>
/* ==========================================================================
  Block Text
  ========================================================================== */

/**
*  Typeset for content
*/

.c-btn {
  display: inline-block; /* [1] */
  vertical-align: middle; /* [2] */
  font: inherit; /* [3] */
  text-align: center; /* [4] */
  margin:  0; /* [4] */
  cursor: pointer; /* [5] */
  overflow: visible; /* [6] */
  padding: calc($spacingUnit * 0.5) calc($spacingUnit * 2);
  transition: all 100ms ease;
  background-color: $colorLink;
  text-decoration: none;
  color: white;
  font-size: 0.8em;
  margin-bottom: calc($spacingUnit * 2);

  &:hover {
    background-color: color($colorLink whiteness(20%));
  }

}

</style>
