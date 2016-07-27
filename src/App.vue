<template>
  <div id="app" class="o-wrapper">
    <site-header></site-header>
    <main class="content" role="main">
       <router-view
         class="view"
         keep-alive
         transition
         transition-mode="out-in">
       </router-view>
    </main>
    <site-navigation>
      <div class="c-site-navigation__rail">
        <site-navigation-item link="/about" color="green">About</site-navigation-item>
        <site-navigation-item link="/work" color="orange">Work</site-navigation-item>
        <site-navigation-item link="/outside-work" color="blue">Outside of Work</site-navigation-item>
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
  @apply --geomanistRegular;
  overflow-x: hidden
}


</style>
