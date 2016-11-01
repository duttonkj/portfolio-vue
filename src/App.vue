<template>
  <div id="app" class="o-wrapper c-portfolio-wrapper">
    <!-- <site-footer></site-footer> -->
    <site-header></site-header>
    <main class="c-content-wrapper" role="main">
       <router-view
         class="c-page-transition"
         keep-alive
         transition="page"
         transition-mode="out-in">
       </router-view>
    </main>
    <site-navigation>
      <div class="c-site-navigation__rail" v-if="beginNavAnime">
        <site-navigation-item :link="item.url" :color="item.color" v-for="item in menu.left" transition="pop">{{item.text}}</site-navigation-item>
      </div>
      <div class="c-site-navigation__rail c-site-navigation__rail--right"  v-if="beginNavAnime">
        <site-navigation-item :link="item.url" :color="item.color" v-for="item in menu.right" transition="pop">{{item.text}}</site-navigation-item>
      </div>
      <!-- <site-navigation-item link="/" color="link" home-link="true">Home</site-navigation-item> -->
    </site-navigation>
  </div>
</template>

<script>
import SiteHeader from './components/site-header'
import SiteNavigation from './components/site-navigation'
import SiteNavigationItem from './components/site-navigation-item'
import SiteFooter from './components/site-footer'
import Store from './store/'

export default {
  ready () {
    // Probably a better way to do this, but transitions were not running on inital component build
    setTimeout(() => { this.beginNavAnime = true }, 1000)
  },
  data () {
    return {
      beginNavAnime: false,
      menu: Store.menu
    }
  },
  components: {
    SiteHeader,
    SiteNavigation,
    SiteNavigationItem,
    SiteFooter
  }
}
</script>

<style src="assets/css/itcss.css"></style>
<style src="assets/css/fonts.css"></style>
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
  font-family: $geomanistRegular;
}
/* ==========================================================================
  Portfolio wrapper
  ========================================================================== */
/**
* Custom styling/override for the o-wrapper viewpoert.  padding provides room for the side navs as well as a nice gutter for the content
*/
.c-portfolio-wrapper{
  max-width: none;
  min-height: 100vh;
  padding-left: 25px;
  padding-right: 25px;
  @media $tablet {
    margin: 0;
    padding-left: calc(($spacingUnit * 2));
    padding-right: calc(($spacingUnit * 2));
  }
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
    padding-left: calc(($spacingUnit * 10) + $navWidth);
    padding-right: calc(($spacingUnit * 10) + $navWidth);
  }
}

/* ==========================================================================
  Content wrapper
  ========================================================================== */
/**
* Set a max width for large viewports
*/
.c-content-wrapper{
  // max-width: 1100px;
}

/* ==========================================================================
  Page transtion component to help transitions
  ========================================================================== */
/**
* Keep stuff offscreen to prevent flash before js binds
*/
.c-page-transition{
  will-change: transform;
  transform: translateX(-200%);
}
</style>
