<template>
  <div class="sub-section-animator">
    <wrap-section id="work" title="Selected Work" color="orange" v-else>
      <block-base>
        <block-content>
          <block-text hero="true">
            Pharmaceutical industry legal requirements necessitate that I keep work out of the public domain.  Please <a v-link="'lets-talk'" class="c-link c-link--decorate">request</a> a password to view selected work samples:
          </block-text>
          <form class="access-form" @submit.prevent="onSubmit" method="post" action="/access">
            <div class="c-input-group" v-bind:class="{ 'c-input-group--has-error': form.error }">
              <label class="c-input-group__label">Enter Password:</label>
              <input  class="c-input-group__input c-input-group__input--text-field" v-model="form.data.password" type="text" name="work-access" value="" maxlength="20" placeholder="Password goes here" />
              <button class="c-btn c-input-group__submit" type="submit">Go</button>
            </div>
          </form>
        </block-content>
      </block-base>
    </wrap-section>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'
import WrapSection from './../components/wrap-section'

// Grab store for authenticating user
import Store from './../store/'

export default {
  mixins: [BlocksMixin],
  data () {
    return {
      form: {
        success: false,
        error: false,
        data: {
          password: ''
        }
      }
    }
  },
  components: {
    WrapSection
  },
  methods: {
    onSubmit () {
      // Remove class if we need to restart animation
      this.form.error = false

      // Check for valid string
      if (this.validateInput(this.form.data.password)) {
        this.authenticateUser()
          .then(() => this.$router.go({path: '/work'}))
          .catch(() => this.showFormError())
      } else {
        this.showFormError()
      }
    },
    authenticateUser () {
      var auth = {
        type: 'local',
        'email': Store.user,
        'password': this.form.data.password
      }
      return Store.authenticate(auth)
    },
    showFormError () {
      this.form.error = true
    },
    validateInput (inputText) {
      return inputText.trim().length
    }
  }
}
</script>

<style>

/* ==========================================================================
  Input Group
  ========================================================================== */

/**
*  Individual Nagivation element
*/

.c-input-group {
  font-size: 0.5rem;
  margin-top: calc($spacingUnit * 2);
  @media $desktop {
    font-size: 1rem;
  }
}


/* Label
   ========================================================================== */
.c-input-group__label {
  display: block;
  font-size: 1.3em;
  margin-bottom: calc($spacingUnit / 2);
}


/* Text Field
   ========================================================================== */
.c-input-group__input{
    width: 100%;
    display: block;
    border: 0;
    border-bottom: 4px solid $colorBase;
    background-color: transparent;
    font-size: 2.5em;
    padding: calc($spacingUnit / 2) 0;
    margin-bottom: $spacingUnit;

    &:focus {
      outline: 0;
      border-bottom-color: $colorLink;
    }
}


/* Submit button
   ========================================================================== */
.c-input-group__submit{
    font-size: 1.2em;
}


/* Error state
   ========================================================================== */
.c-input-group--has-error {
  /* Shake form field to indicate error.  Use keyframe animation */
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  /* Color form field red */
  & .c-input-group__input {
    border-bottom-color: red;
    color: darkred;
    &:focus {
      color: darkred;
    }
  }
  /* Color label red */
  & .c-input-group__label {
    color: red;
  }
}


/* Error state Animation
   ========================================================================== */
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>
