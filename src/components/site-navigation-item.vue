<template>
  <div class="c-site-navigation-item" v-bind:class="[
    'c-site-navigation-item--' + color,
    {
      'c-site-navigation-item--home': homeLink
    }
  ]">
    <a v-link="link" class="c-site-navigation-item__link"><slot></slot></a>
  </div>
</template>

<script>
export default {
  props: ['link', 'color', 'homeLink'],
  data () {
    return {
      orange: 'site-navigation__item--orange',
      green: 'site-navigation__item--green',
      blue: 'site-navigation__item--blue',
      purple: 'site-navigation__item--purple',
      ocean: 'site-navigation__item--ocean',
      red: 'site-navigation__item--red'
    }
  },
  computed: {
    home () {
      return 'home-class'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* ==========================================================================
  Site Navigation Item
  ========================================================================== */

/**
*  Individual Nagivation element
*/

.c-site-navigation-item {
  display: block;
  will-change: transform;
  transform: scale(0);
  transform-origin: 0 50%;

  @media $desktop {
    width: $navWidth;
    height: 33.33vh;
    font-size: 0.9rem;
  }

  @media $wide {
    font-size: 1.2rem;
  }

  /* Change origin for right side items */
  @nest .c-site-navigation__rail--right & {
    transform-origin: 100% 50%;
  }
}


/* Link nested inside
   ========================================================================== */

/**
*
*/

.c-site-navigation-item__link {
  width: auto;
  height: 100%;
  padding: $spacingUnit 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 100ms ease-out;
  will-change: transform;

  &:visited {
    color: white;
  }

  &:hover,
  &.v-link-active {
    transform: scale(1.2) !important;
  }
}




/* Color Variations
   ========================================================================== */

/**
*  Apply a different color to each link based on class name.  Use a darken effect on hover. I would typically use a SASS function to output these
*  but have not dug one up yet for postcss
*/

$hoverEffect: blackness(15%);

/* Purple */
.c-site-navigation-item--purple {
  & .c-site-navigation-item__link {
    background-color: $colorPurple;

    &:hover,
    &.v-link-active {
      background-color: color($colorPurple $hoverEffect);
    }
  }
}

/* Red */
.c-site-navigation-item--red {
  & .c-site-navigation-item__link {
    background-color: $colorRed;

    &:hover,
    &.v-link-active {
      background-color: color($colorRed $hoverEffect);
    }
  }
}

/* Ocean */
.c-site-navigation-item--ocean {
  & .c-site-navigation-item__link {
    background-color: $colorOcean;

    &:hover,
    &.v-link-active {
      background-color: color($colorOcean $hoverEffect);
    }
  }
}

/* Green */
.c-site-navigation-item--green {
  & .c-site-navigation-item__link {
    background-color: $colorGreen;

    &:hover,
    &.v-link-active{
      background-color: color($colorGreen $hoverEffect);
    }
  }
}

/* Orange */
.c-site-navigation-item--orange {
  & .c-site-navigation-item__link {
    background-color: $colorOrange;

    &:hover,
    &.v-link-active {
      background-color: color($colorOrange $hoverEffect);
    }
  }
}

/* Blue */
.c-site-navigation-item--blue {
  & .c-site-navigation-item__link {
    background-color: $colorBlue;

    &:hover,
    &.v-link-active {
      background-color: color($colorBlue $hoverEffect);
    }
  }
}


</style>
