<template>
  <div class="c-circle-headline">
          <div class="c-circle-headline__wrapper">
            <svg class="c-circle-headline__svg js-circle-headline__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
                <defs>
                    <path id="criclePath" d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "/>
                </defs>
                <circle class="c-circle-headline__text-path" cx="150" cy="150" r="125" stroke="none" stroke-width="5"/>
                <g>
                    <use xlink:href="#criclePath" fill="none"/>
                    <text class="c-circle-headline__text circle-headline__text--name">
                        <textPath xlink:href="#criclePath">FRONT-END</textPath>
                    </text>
                    <text class="c-circle-headline__text circle-headline__text--name">
                        <textPath startOffset="50.5%" xlink:href="#criclePath">DEVELOPER</textPath>
                    </text>
                </g>
            </svg>
            <img class="c-circle-headline__profile circle-headline__profile--developer" src="https://s3.amazonaws.com/blaston-llc/profile-pic-520.jpg" />
          </div>
    </div>
</template>

<script>
// import anime from 'animejs'

export default {}
</script>

<style>
/* ==========================================================================
  Circle Headline
  ========================================================================== */

/**
*  Profile picture wraped with text, add a roation animation
*/

.c-circle-headline {
  width: 60%;
  margin: 0 auto;
}



/* Wrapper
   ========================================================================== */

/**
 *  Use padding bottom to grow svg responsivly
 */
 .c-circle-headline__wrapper{
   display: block;
   position: relative;
   width: 100%;
   padding-bottom: 90%;
   height: 0;
}



/* SVG
   ========================================================================== */

/**
 *  Actual svg.  lets position it absolute and let it fill the width
 */

.c-circle-headline__svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    transform: translate3d(0,0,0);
}



/* Text Path
   ========================================================================== */

/**
 *  Use padding bottom to grow svg responsivly
 */

.c-circle-headline__text-path {
   opacity: 0.2;
   fill: $colorLogo;
 }



 /* Circle Text
    ========================================================================== */

 /**
  *  text wrapping around svg using path
  */

 .c-circle-headline__text {
   font-size: 40px;
   font-weight: bold;
   text-transform: uppercase;
   width: 60%;
   fill: $colorLogo;
}




/* Profile Image
  ========================================================================== */

/**
*  Use padding bottom to grow svg responsivly
*/

.c-circle-headline__profile {
    width: 60%;
    height: auto;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -30%;
    margin-top: -30%;
}

</style>
