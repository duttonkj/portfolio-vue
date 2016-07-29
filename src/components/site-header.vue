<template>
  <header class="c-site-header">
    <h1 class="c-site-header__title"><a v-link="{name:'intro'}" class="c-site-header__link">Kevin Dutton</a></h1>
    <!-- <p class="c-site-header__meta">Columbus, OH</p> -->
  </header>
</template>

<script>
export default {
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ==========================================================================
  Site Header
  ========================================================================== */

/**
*  basic header, but palying with a special display on the intro page only
*/

.c-site-header {
  //padding-top: calc($spacingUnit * 0.5);
  padding-bottom: calc($spacingUnit * 0.5);
  font-size: 0.6rem;
  text-align: center;
  @media $desktop {
    font-size: 1rem;
  }
  @media $xWide {
    font-size: 1.4rem;
  }
}

/* Header title
   ========================================================================== */

/**
*
*/

.c-site-header__title {
  display: inline-block;
  margin: 0 auto;
  padding: calc($spacingUnit * 0.2) calc($spacingUnit);
  color: #115953;
  //border-bottom: 4px solid $colorBorderPrimary;
  border-bottom: 2px solid #115953;
  // background-color: rgba(17, 89, 83, 0.1);
  font-size: 2em;
  line-height: 1.2;
  text-transform: uppercase;
}

/* Header title
   ========================================================================== */

/**
*
*/

.c-site-header__meta {
  font-size: 0.8em;
}


/* Header link
   ========================================================================== */

/**
* Provide a link home.  Hide it in the logo, remove all link styling
*/

.c-site-header__link {
  color: $colorLogo;
  text-decoration: none;
}

</style>
