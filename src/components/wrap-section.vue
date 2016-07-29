<template>
  <div class="c-content c-content--{{color}}"  data-section="{{identifier}}">
    <h4 class="c-content__headline"><span>{{title}}</span></h4>
    <div class="c-content__wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['identifier', 'title', 'color'],
  data () {
    return {}
  }
}
</script>

<style scoped>

/* ==========================================================================
  Content
  ========================================================================== */

/**
*  Style top level content. Vertical padding and headlines
*/

.c-content {
  padding-top: calc($spacingUnit * 2);
  padding-bottom: calc($spacingUnit *2);
  font-size: 0.8rem;
  @media $tablet {
    font-size: 1rem;
  }
  @media $desktop {
    font-size: 1.2rem;
  }
  @media $wide {
    font-size: 1.4rem;
  }
}



/* Content Headline
   ========================================================================== */

/**
* Main Page title, match color of nav section
*/

.c-content__headline {
  display: inline-block;
  padding: calc($spacingUnit * 0.5) calc($spacingUnit);
  border-bottom: 2px solid $colorBase;
  text-transform: uppercase;
  color: $colorBase;
  font-size: 1em;
  font-family: $geomanistBlack;
  line-height: 1;
  font-weight: normal;

  @media $desktop {
    margin-bottom: calc($spacingUnit * 1);
  }

  overflow: hidden;


  /* Color Variations
     ========================================================================== */

  /**
  *  Apply a different color to each link based on class name.  Use a darken effect on hover. I would typically use a SASS function to output these
  *  but have not dug one up yet for postcss. Going to try the nesting method this time due to the simpler requirement
  */

  /* Purple */
  @nest .c-content--purple & {
      border-color: $colorPurple;
      color: $colorPurple;
  }

  /* Green */
  @nest .c-content--green & {
      border-color: $colorGreen;
      color: $colorGreen;
  }

  /* Blue */
  @nest .c-content--blue & {
      border-color: $colorBlue;
      color: $colorBlue
  }

  /* Orange */
  @nest .c-content--orange & {
      border-color: $colorOrange;
      color: $colorOrange;
  }

  /* Red */
  @nest .c-content--red & {
      border-color: $colorRed;
      color: $colorRed;
  }

  /* Ocean */
  @nest .c-content--ocean & {
      border-color: $colorOcean;
      color: $colorOcean;
  }

}







</style>
