<template>
  <div id="app" class="o-wrapper c-portfolio-wrapper">
    <site-header></site-header>
    <main class="c-content-wrapper" role="main">
       <router-view
         class="view"
         keep-alive
         transition
         transition-mode="out-in">
       </router-view>
    </main>
    <site-navigation>
      <div class="c-site-navigation__rail">
        <site-navigation-item link="/about" color="blue">About</site-navigation-item>
        <site-navigation-item link="/work" color="orange">Work</site-navigation-item>
        <site-navigation-item link="/outside-work" color="green">Outside of Work</site-navigation-item>
      </div>
      <div class="c-site-navigation__rail c-site-navigation__rail--right">
        <site-navigation-item link="/endorsements" color="purple">Endorsements</site-navigation-item>
        <site-navigation-item link="/recognition" color="ocean">Recognition</site-navigation-item>
        <site-navigation-item link="/lets-talk" color="red">Let's Talk</site-navigation-item>
      </div>
      <site-navigation-item link="/" color="link" home-link="true">Home</site-navigation-item>
    </site-navigation>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from './components/site-header'
import SiteNavigation from './components/site-navigation'
import SiteNavigationItem from './components/site-navigation-item'
import SiteFooter from './components/site-footer'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    SiteNavigationItem,
    SiteFooter
  }
}
</script>

<style src="./itcss.css"></style>
<style>

/* ==========================================================================
  Portfoilo
  ========================================================================== */

/**
* App level component.  Set Colors and Styles to to body
*/

.c-portfolio{
  background-color: #f4fff5;
  color: #222;
  overflow-x: hidden;
  line-height: $lineHeight;
  font-family: 'geomanistregular', 'Avenir Next', Helvetica, arial, sans-serif;
}




/* ==========================================================================
  Portfolio wrapper
  ========================================================================== */

/**
* Custom styling/override for the o-wrapper viewpoert.  padding provides room for the side navs as well as a nice gutter for the content
*/

.c-portfolio-wrapper{
  max-width: none;

  @media $desktop {
    margin: 0;
    padding-left: calc(($spacingUnit * 4) + $navWidth);
    padding-right: calc(($spacingUnit * 4) + $navWidth);
  }

  @media $wide {
    padding-left: calc(($spacingUnit * 6) + $navWidth);
    padding-right: calc(($spacingUnit * 6) + $navWidth);
  }

  @media $xWide {
    padding-left: calc(($spacingUnit * 8) + $navWidth);
    padding-right: calc(($spacingUnit * 8) + $navWidth);
  }
}



/* ==========================================================================
  Content wrapper
  ========================================================================== */

/**
* Set a max width for large viewports
*/

.c-content-wrapper{
  max-width: 1100px;
}




</style>
