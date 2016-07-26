<template>
  <div class="section-animator">
    <wrap-section id="about" title="About Kevin" color="ocean">
      <block-base>
        <block-content>
          <block-text hero="true">I am a <span class="highlight">front-end</span> developer with <span class="highlight">15 years</span> of professional experience who builds <span class="highlight">applications</span> and <span class="highlight">interfaces</span> that meet business and design needs.</block-text>
          <!-- <block-text hero="true">I currently reside in Columbus, Ohio</block-text> -->
        </block-content>
      </block-base>
      <block-base>
        <block-header>
          <block-title>Frequently Use</block-title>
        </block-header>
        <block-content>
          <skills-tag v-for="skill in skills">{{skill}}</skills-tag>
        </block-content>
      </block-base>
      <block-base>
        <block-header>
          <block-title>This site</block-title>
        </block-header>
        <block-content>
          <block-text>The base for this site was cloned from Google's <a class="decorate" href="https://developers.google.com/web/tools/starter-kit/?hl=en" target="_blank">Web Starter Kit</a>.  I removed the material design css framework and replaced it with <a  class="decorate" href="https://github.com/sass-mq/sass-mq" target="_blank">SassMQ</a> for bare bones breakpoint managment.</block-text>
          <block-text>I experimented with <a  class="decorate"  href="http://anime-js.com/" target="_blank">anime.js</a> on many of the animations and transitions. </block-text>
          <block-text>Project data is stored in an API built with <a class="decorate" href="http://feathersjs.com/" target="_blank">Feathers.js</a> and connected to via websockets.</block-text>
          <block-text>// TODO: Optimize based on PageSpeed results</block-text>
          <block-text>// TODO: Rebuild with <a class="decorate" href="https://vuejs.org/" target="_blank">Vue.js</a></block-text>
        </block-content>
      </block-base>
    </wrap-section>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'
import WrapSection from './../components/wrap-section'

// Special skills tag needed on this page only
import SkillsTag from './../components/skills-tag'

export default {
  mixins: [BlocksMixin],
  data () {
    return {
      skills: [
        'html',
        'css',
        'svg',
        'javascript',
        'git',
        'nodejs',
        'php',
        'sass',
        'vuejs',
        'emberjs',
        'reactjs',
        'flux',
        'jQuery',
        'webpack',
        'gulp',
        'npm',
        'composer',
        'coccoa pods',
        'laravel',
        'wordpress',
        'objective-c',
        'swift',
        'unbuntu',
        'apache',
        'nginx',
        'conintuous deployments'
      ]
    }
  },
  components: {
    WrapSection,
    SkillsTag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
