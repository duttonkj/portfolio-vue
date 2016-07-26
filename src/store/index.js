import { EventEmitter } from 'events'
// import { Promise } from 'es6-promise'
// import io from 'socket.io-client'
// import feathers from 'feathers/client'
// import socketio from 'feathers-socketio/client'
// import hooks from 'feathers-hooks'
// import userModel from './../models/user'
// import authentication from 'feathers-authentication/client'

// Import loca data
import Endorsements from './endorsements'

// const apiUrl = 'http://localhost:3030/'
const store = new EventEmitter()
// const socket = io(apiUrl)

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
// store.api = feathers()
//   .configure(socketio(socket))
//   .configure(hooks())
//   // Use localStorage to store our login token
//   .configure(authentication({ storage: window.localStorage }))
//
// // Setup services API's
// const userService = store.api.service('users')
// const challengeService = store.api.service('challenges')
// const goalService = store.api.service('goals')
// const inviteService = store.api.service('invites')
// const challengeUserService = store.api.service('challengeUsers')
// const checkinService = store.api.service('checkins')
//
// var userAuthorized = false
// var currentUser = userModel.init()

// var getCurrentUserData = () => {
//   currentUser = store.api.get('user')
//   store.user.current = currentUser
//   return currentUser
// }

export default store

/*
 * Endorsement Data
 * ----------------
 *  return local array of testimonials
 */

store.endorsements = Endorsements

// userService.on('created', message => {
//   console.log('new USER')
// })
//
// /**
//   * Global
//   *
//   */
// store.login = (authData) => {
//   return new Promise((resolve, reject) => {
//     store.api.authenticate(authData)
//       .then((user) => {
//         userAuthorized = true
//         store.user.current = user.data
//         // var userData = getCurrentUserData()
//         resolve(user.data)
//         store.emit('user-authorized')
//       })
//       .catch(error => {
//         console.error(error)
//         reject(error)
//       })
//   })
// }
//
// store.authenticateUser = () => {
//   return new Promise((resolve, reject) => {
//     store.api.authenticate()
//       .then((user) => {
//         // console.log('user authed by store')
//         // console.log(user.data)
//         userAuthorized = true
//         store.user.current = user.data
//         // var userData = getCurrentUserData()
//         resolve(user.data)
//         store.emit('user-authorized')
//       })
//       // On errors we just redirect back to the login page
//       .catch(error => {
//         console.log('user not logged in')
//         console.log(error)
//         userAuthorized = false
//         reject(error)
//       })
//   })
// }
//
// store.authenticateTempUser = () => {
//   return new Promise((resolve, reject) => {
//     if (userAuthorized) {
//       resolve()
//     }
//     store.api.authenticate({
//       type: 'local',
//       'email': 'join@lose-to-win.com',
//       'password': 'Vx2R94Nd2UU5pScL'
//     })
//       .then(() => {
//         console.log('temp user authed by store')
//         userAuthorized = true
//         resolve()
//         store.emit('user-authorized')
//       })
//       // On errors we just redirect back to the login page
//       .catch(error => {
//         console.log('temp user not logged in')
//         console.log(error)
//         userAuthorized = false
//         reject(error)
//       })
//   })
// }
//
// store.isUserAuthenticated = () => {
//   return userAuthorized
// }
//
// /**
//   * User CRUD
//   *
//   */
// store.user = {
//   create: (userData) => {
//     return new Promise((resolve, reject) => {
//       userService.create(userData)
//         .then(data => {
//           console.log('user promse returned, lets resolve original')
//           resolve(data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   }
// }
//
// /**
//   * Challenge CRUD
//   *
//   */
// store.challenge = {
//   create: data => {
//     return new Promise((resolve, reject) => {
//       challengeService.create(data)
//         .then(page => {
//           resolve(page.data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   fetch: query => {
//     return new Promise((resolve, reject) => {
//       challengeService.find(query)
//         .then(page => {
//           console.log(page)
//           resolve(page.data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   get: challengeId => {
//     return new Promise((resolve, reject) => {
//       challengeService.get(challengeId)
//         .then(data => {
//           console.log('CHALLENGE RETURNED')
//           console.log(data)
//           resolve(data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   }
// }
//
// /**
//   * Goal CRUD
//   *
//   */
// store.goal = {
//   create: data => {
//     return new Promise((resolve, reject) => {
//       console.log('send challenge data do api')
//       goalService.create(data)
//         .then(data => {
//           console.log('promse returned, lets resolve original')
//           resolve(data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   }
// }
//
// /**
//   * Invite CRUD
//   *
//   */
// store.invite = {
//   listeners: data => {
//     inviteService.on('created', payload => store.emit('invite-created', payload))
//     inviteService.on('patched', payload => store.emit('invite-patched', payload))
//   },
//   create: data => {
//     return new Promise((resolve, reject) => {
//       console.log('send invite data do api')
//       inviteService.create(data)
//         .then(data => {
//           console.log('promse returned, lets resolve original')
//           resolve(data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   update: (id, data) => {
//     console.log('lets update the invite')
//     return new Promise((resolve, reject) => {
//       console.log('send invite data do api')
//       inviteService.patch(id, data)
//         .then(data => {
//           console.log('invite updated lets resolve original')
//           resolve(data)
//         })
//         .catch(error => {
//           console.log('invite error')
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   fetchByChallenge: challengeId => {
//     return new Promise((resolve, reject) => {
//       console.log('find invite data from api')
//       console.log(currentUser._id)
//       const query = {
//         query: {
//           _challengeId: challengeId,
//           _userId: store.user.current._id,
//           $sort: {
//             createdAt: -1
//           }
//         }
//       }
//       inviteService.find(query)
//         .then(page => {
//           console.log('promse returned, lets resolve original')
//           resolve(page.data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   fetchById: _id => {
//     return new Promise((resolve, reject) => {
//       inviteService.get(_id)
//         .then(data => {
//           console.log('promse returned, lets resolve original')
//           console.log(data)
//           resolve(data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   }
// }
// store.invite.listeners()
//
// /**
//   * ChallengeUsers CRUD
//   *
//   */
// store.challengeUser = {
//   listeners: data => {
//     challengeUserService.on('patched', payload => store.emit('challenge-user-patched', payload))
//     challengeUserService.on('created', payload => store.emit('challenge-user-created', payload))
//   },
//   create: data => {
//     return new Promise((resolve, reject) => {
//       console.log('create challenge user API data do api')
//       challengeUserService.create(data)
//         .then(data => {
//           console.log('promse returned, lets resolve original')
//           resolve(data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   fetch: query => {
//     return new Promise((resolve, reject) => {
//       challengeUserService.find(query)
//         .then(page => {
//           resolve(page.data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   get: _id => {
//     return new Promise((resolve, reject) => {
//       console.log('get challenge user by ID')
//       console.log(_id)
//       challengeUserService.get(_id)
//         .then(data => {
//           console.log('challenge user found by ID')
//           console.log(data)
//           resolve(data)
//         })
//         .catch(error => {
//           console.log(error)
//           reject(error)
//         })
//     })
//   },
//   patch: (id, data) => {
//     console.log('lets update the challengeUse')
//     return new Promise((resolve, reject) => {
//       console.log('send challngeuser data do api')
//       console.log(id)
//       console.log(data)
//       challengeUserService.patch(id, data)
//         .then(data => {
//           console.log('challenge user updated lets resolve original')
//           resolve(data)
//         })
//         .catch(error => {
//           console.log('chanllenge service error error')
//           console.error(error)
//           reject(error)
//         })
//     })
//   }
// }
// store.challengeUser.listeners()
//
// /**
//   * Checkin CRUD
//   *
//   */
// store.checkin = {
//   listeners: data => {
//     checkinService.on('created', payload => store.emit('checkin-created', payload))
//   },
//   create: data => {
//     return new Promise((resolve, reject) => {
//       console.log('create challenge user API data do api')
//       checkinService.create(data)
//         .then(data => {
//           console.log('promse returned, lets resolve original')
//           resolve(data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   fetch: query => {
//     return new Promise((resolve, reject) => {
//       checkinService.find(query)
//         .then(page => {
//           console.log('checkin find returned, lets resolve original')
//           console.log(page)
//           resolve(page.data)
//         })
//         .catch(error => {
//           console.error(error)
//           reject(error)
//         })
//     })
//   },
//   verify: query => {
//     return new Promise((resolve, reject) => {
//       checkinService.find(query)
//         .then(page => {
//           console.log('checkin find returned, lets resolve original')
//           console.log(page)
//           if (page.data.length < 1) {
//             console.log('no results, return true')
//             resolve(true)
//           } else {
//             console.log('results, reject')
//             resolve(false)
//           }
//         })
//         .catch(error => {
//           console.error(error)
//           reject(false)
//         })
//     })
//   }
// }
// store.checkin.listeners()

// inviteService.on('created', invite => {
//   console.log('new Invite: EMIT');
//   store.emit('invite-created',invite)
// })

// api.child('topstories').on('value', snapshot => {
//   topStoryIds = snapshot.val()
//   store.emit('topstories-updated')
// })

/**
 * Fetch an item data with given id.
 *
 * @param {Number} id
 * @return {Promise}
 */

// store.fetchItem = id => {
//   return new Promise((resolve, reject) => {
//     if (itemsCache[id]) {
//       resolve(itemsCache[id])
//     } else {
//       api.child('item/' + id).once('value', snapshot => {
//         const story = itemsCache[id] = snapshot.val()
//         resolve(story)
//       }, reject)
//     }
//   })
// }

/**
 * Fetch the given list of items.
 *
 * @param {Array<Number>} ids
 * @return {Promise}
 */

// store.fetchItems = ids => {
//   if (!ids || !ids.length) {
//     return Promise.resolve([])
//   } else {
//     return Promise.all(ids.map(id => store.fetchItem(id)))
//   }
// }

/**
 * Fetch items for the given page.
 *
 * @param {Number} page
 * @return {Promise}
 */

// store.fetchItemsByPage = page => {
//   const start = (page - 1) * storiesPerPage
//   const end = page * storiesPerPage
//   const ids = topStoryIds.slice(start, end)
//   return store.fetchItems(ids)
// }

/**
 * Fetch a user data with given id.
 *
 * @param {Number} id
 * @return {Promise}
 */

// store.fetchUser = id => {
//   return new Promise((resolve, reject) => {
//     api.child('user/' + id).once('value', snapshot => {
//       resolve(snapshot.val())
//     }, reject)
//   })
// }
