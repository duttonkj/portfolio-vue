<template>
  <div class="sub-section-animator">
      <block-base>
        <block-content>
          <block-text hero="true">
            Pharmaceutical industry legal requirements necessitate that I keep work out of the public domain.  Please <a>request</a> a password to view selected work samples:
          </block-text>
          <form class="access-form" @submit.prevent="onSubmit" method="post" action="/access">
            <div class="input-group work-access" v-bind:class="{ 'input-group--has-error': form.error }">
              <label>Enter Password:</label>
              <input v-model="form.data.password" type="text" name="work-access" value="" maxlength="20" placeholder="Password goes here" />
              <button type="submit">Go</button>
            </div>
          </form>
        </block-content>
      </block-base>
  </div>
</template>

<script>
// Grab all of block templates for use
import BlocksMixin from './../mixins/blocks'

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
