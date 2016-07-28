<template>
  <a class="c-link" :class="{'c-link--decorate': decorate}" :href="url ? url : null" :target="newTab ? '_blank' : null"><slot></slot></a>
</template>

<script>
export default {
  props: ['decorate', 'url', 'newTab']
}
</script>

<style >
/* ==========================================================================
  Link
  ========================================================================== */

/**
*  Basic styles for links
*/

.c-link {
  color: $colorLink;

  &:visited {

  }

  &:hover {
    color: color($colorLink whiteness(20%));
  }
}



/* Fancy hover animation
   ========================================================================== */
.c-link--decorate {
  position: relative;
  transition: all 500ms ease-in-out 0s;
  z-index: 3;
  &:hover {
    //color:#D90429;
    color: #fff;
    &:before {
      transform: scaleX(1);
    }
  }
  &:before {
    content: "";
    position: absolute;

    bottom: -10px;
    left: -10px;
    top: -10px;
    right: -10px;
    background-color: $colorLink;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.2s ease-in-out 0s;
    z-index: -1;
  }
}

</style>
