<template>
  <footer class="c-site-footer">
    <address>
      <href url="mailto:hello@kevindutton.com" decorate="true" new-tab="true" extra-class="c-site-footer__link">hello@kevindutton.com</href>
      <href url="https://github.com/duttonkj" decorate="true" new-tab="true" extra-class="c-site-footer__link">Github</href>
      <href url="https://www.linkedin.com/in/kevindutton" decorate="true" new-tab="true" extra-class="c-site-footer__link">LinkedIn</href>
      <href url="https://twitter.com/duttonkj" decorate="true" new-tab="true" extra-class="c-site-footer__link">Twitter</href>
   </address>
  </footer>
</template>

<script>
import BlocksMixin from './../mixins/blocks'

export default {
  mixins: [BlocksMixin],
  components: {}
}
</script>

<style >
/* ==========================================================================
  Site Footer
  ========================================================================== */

/**
*  simple footer. lets just display links inline
*/

.c-site-footer {
  padding-top: calc($spacingUnit * 0.5);
  padding-bottom: calc($spacingUnit * 0.5);
  font-size: 0.7rem;
  text-align: center;
  //border-bottom: 1px solid $colorBorderPrimary;
  @media $desktop {
    font-size: 0.8rem;
  }
}



/* footer link
   ========================================================================== */

/**
*
*/

.c-site-footer__link{
  margin-right: $spacingUnit;
  &:last-of-type {
    margin-right: 0;
  }
}
</style>
