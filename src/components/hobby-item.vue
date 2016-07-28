<template>
  <div class="o-layout__item" :class="{'u-1-2':isHero,'u-1-4': !isHero}">
    <div class="c-hobby"
      v-bind:class="[
      {
        'hobby--hero': isHero
      }
    ]" >
      <div class="u-center">
        <slot></slot>
      </div>
      <h5 class="c-hobby__activity-title">{{activity}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isHero', 'activity'],
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
  position: relative;
  margin-bottom: 10px;
  background-color: red;
  overflow: hidden;
  background-color: rgba(96, 116, 102, 0.2);

}




/* Title
   ========================================================================== */

.c-hobby__activity-title {
  position: relative;
  z-index: 50;
  display: block;
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  padding:0.4em;
  margin: 0;
  background-color: #607466;
  margin-right: 1px;
  margin-left: 1px;
  margin-top: calc($spacingUnit / 2);
}




/* Svg
   ========================================================================== */

/**
 * Apply custom colors to the svg graphics
 */

.c-hobby__icon {
    width: 70%;
    /*display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -35%;
    margin-top: -35%;
    width: 70%;*/
    will-change: transform;

    // move off screen for aniatmios to prevent hopping
    transform: translateX(-250%);
    height: auto;
    & path {
      fill: #607466;
    }
}

/* Small adjustments for soccer icon */
.c-hobby__icon--soccer {
  width: 30%;
}

/* Small adjustments for hiking icon */
.c-hobby__icon--hiking {
  width: 60%;
}

/* Small adjustments for canoe icon */
.c-hobby__icon--canoe {
  width: 50%;
}
</style>
