<template>
  <nav class="c-site-navigation" role="navigation"><slot></slot></nav>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
/* ==========================================================================
  Site Navigation
  ========================================================================== */

/**
*  Styles main navigation.  Is a normal inline element until desktop, then become fixed and 2 rails split the navigation from left to right
*/

.c-site-navigation {
  @media $desktop {
    width: 100vw;
    height: 100vw;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }
}

/* Rails
   ========================================================================== */

/**
 * Split nav evelenly between left and right edge on desktop and above
 */
.c-site-navigation__rail {
  position: relative;
  z-index: 5000;
}

.c-site-navigation__rail--right {
  @media $desktop {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
