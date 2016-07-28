<template>
  <div class="o-layout__item" :class="{'u-1-2':isHero,'u-1-4': !isHero}">
    <div class="c-hobby"
      v-bind:class="[
      {
        'hobby--hero': isHero
      }
    ]" >
      <slot></slot>
      <span class="hobby__activity-title">{{title}}</span>
    </div>
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

<style>
/* ==========================================================================
  Hobby item
  ========================================================================== */

/**
*  Object that contains SVG and text
*/

.c-hobby {

}

/* Rails
   ========================================================================== */

/**
 * Split nav evelenly between left and right edge on desktop and above
 */
</style>
