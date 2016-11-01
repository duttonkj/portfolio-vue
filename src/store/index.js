import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'
import io from 'socket.io-client'
import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import authentication from 'feathers-authentication/client'

// Import local data
import Menu from './local-data/menu'
import Endorsements from './local-data/endorsements'
import Skills from './local-data/skills'

const apiUrl = process.env.API_HOST
const store = new EventEmitter()
const socket = io(apiUrl)

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const api = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  // Use localStorage to store our login token
  .configure(authentication({ storage: window.localStorage }))

// Setup services API's
const workService = api.service('works')

export default store

// Api user for viewing work
store.user = 'viewer@kevindutton.com'

/*
 * Menu Data
 * ----------------
 *  return local array of pages and link info
 */

store.menu = Menu

/*
 * Endorsement Data
 * ----------------
 *  return local array of testimonials
 */

store.endorsements = Endorsements

/*
 * Skills Data
 * ----------------
 *  return local array of skills
 */

store.skills = Skills

/*
 * User Auth
 * ----------------
 * use feathers service to check if user is authenticated
 */

store.authenticate = obj => {
  return api.authenticate(obj)
}

/*
 * Work data
 * ----------------
 * return data from api.  lets wrap in a promise and clean up before returning.
 */

store.fetchWork = () => {
  return new Promise((resolve, reject) => {
    workService.find()
      .then(page => {
        // Only return the data array, not wrapping object
        resolve(page.data)
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
  })
}
