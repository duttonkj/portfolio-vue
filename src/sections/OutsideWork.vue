<template>
  <div class="section-animator">
    <wrap-section id="outside-work" title="Interests Outside of Work" color="blue">
      <block-base>
        <block-content>
          <block-text hero="true">
            I believe time away from the screen is important and beneficial. I attempt to find a balance by taking my family on outdoor excursions:
          </block-text>
          <div class="o-layout">
            <hobby-item activity="Mountain Biking" is-hero="true">{{{svg.mountainBike}}}</hobby-item>
            <hobby-item activity="Skiing" is-hero="true">{{{svg.skiing}}}</hobby-item>
            <hobby-item activity="Canoeing">{{{svg.canoeing}}}</hobby-item>
            <hobby-item activity="Camping">{{{svg.camping}}}</hobby-item>
            <hobby-item activity="Hiking">{{{svg.hiking}}}</hobby-item>
            <hobby-item activity="Soccer">{{{svg.soccer}}}</hobby-item>
            </div>
        </block-content>
      </block-base>
    </wrap-section>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'
import WrapSection from './../components/wrap-section'

// Get hobby template
import HobbyItem from './../components/hobby-item'

// Get SVGS
// TODO:  NEED TO FIND A BETTER WAY TO HANDLE THIS
import MountainBike from './../assets/svg/mountain-bike.svg'
import Canoeing from './../assets/svg/canoeing.svg'
import Camping from './../assets/svg/camping.svg'
import Hiking from './../assets/svg/hiking.svg'
import Skiing from './../assets/svg/skiing.svg'
import Soccer from './../assets/svg/soccer.svg'

export default {
  mixins: [BlocksMixin],
  data () {
    return {
      svg: {
        mountainBike: MountainBike,
        canoeing: Canoeing,
        camping: Camping,
        hiking: Hiking,
        skiing: Skiing,
        soccer: Soccer
      }
    }
  },
  components: {
    WrapSection,
    HobbyItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
