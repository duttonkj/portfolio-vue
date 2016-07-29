# portfolio-vue

> Portfolio rewrite utilizing Vue.js and postcss

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Technical Summary

### VueJS

This sites takes advantage of many Vue.js offical modules.  I used the [vue-cli](https://github.com/vuejs/vue-cli) to scaffold out the full-featured [webpack](https://github.com/vuejs-templates/webpack) template.  This enables [vue-loader](https://github.com/vuejs/vue-loader), which allows combine vue, js, and css code in 1 file.  I am undecided on whether this is a good thing.  Its nice having everything in 1 spot but at the same time poses some challenges around css ordering.  I used [vue-router](https://github.com/vuejs/vue-router) and setup [lazy-loading](http://router.vuejs.org/en/lazy.html) which utilizing webpack's async code splitting.  I wrote a small helper to cleanup the routers file.  Es6 support is setup with Babel.  


### CSS

Switchted from my traditional setup (Sass, SassMq, AutoPrefixer) to the much hyped [postcss](http://postcss.org/).   I brought in [cssnext()](http://cssnext.io/) to handle the majority of features.  I also included [postcss-import](https://github.com/postcss/postcss-import) to pull in normalize.css.  I was having issues sharing custom properties across templates so I settled on [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) to load Sass style variables globally.  

I used [BEM](http://getbem.com/introduction/) as a naming convention for components.  I also studied and attempted to incorporate [ITCSS](http://itcss.io/).  Its called 'Inverted Triangle CSS'. Its a great and intruiging methodoloy introduced by [Harry Roberts](http://csswizardry.com/).

> The ITCSS philosophy is a simple one at its core. Basically that we should order CSS by metrics defined by the language (and its features) than by the usual standard of human-oriented patterns.

> ITCSS takes CSS and writes it in a way that browsers and the design of the language can best utilize, which gives us far better scalability and maintainability than we'd get if we were to write CSS around how a person thinks.

It has significantly reduced the amount of css needed for [larger sites](https://medium.com/@shaunbent/css-at-bbc-sport-part-1-bab546184e66#.tphw4l4py). I saw a drop-off in the amount of code I needed to write this time around.  Information on ITCSS is a bit scarce, but I was able to hack together a starter kit based on screencasts and other libraries.


### Transitions

Transitions were tackled with the new [animejs](http://anime-js.com/) library.  I typically rely heavily on CSS transitions but wanted to try the new library and liked the idea if finer control of timing and callbacks.  I wrote a helper to extrapolate the settings from the anime object to clean up areas of the code and plugs nicely into Vue's transition hooks.

### Data

I setup a store as a gateway to all of the data.  Simple data are stored locally in js files.  Work content is stored in an API that I wrote using [FeathersJS](http://feathersjs.com/) and password protected.  API data is loaded in via the `$data` hook from router.


### Continuous Deployment

Continuous Deployments run through [DeployBot](https://deploybot.com/).  [![Deployment status from DeployBot](https://blast-on.deploybot.com/badge/34534836062568/80171.svg)](http://deploybot.com)
