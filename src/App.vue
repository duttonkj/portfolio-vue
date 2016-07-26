<template>
  <div id="app">
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
      <div class="site-navigation__rail">
        <site-navigation-item link="/about" color="green">About</site-navigation-item>
        <site-navigation-item link="/work" color="orange">Work</site-navigation-item>
        <site-navigation-item link="/outside-work" color="blue">Outside of Work</site-navigation-item>
      </div>
      <div class="site-navigation__rail site-navigation__rail--right">
        <site-navigation-item link="/endorsements" color="purple">Endorsements</site-navigation-item>
        <site-navigation-item link="/recognition" color="purple">Recognition</site-navigation-item>
        <site-navigation-item link="/lets-talk" color="purple">Let's Talk</site-navigation-item>
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

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  /*color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;*/
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
