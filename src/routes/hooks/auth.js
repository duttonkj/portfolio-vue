// Grab store for authentication
import Store from './../../store/'

export default function ({ to, next, redirect, abort }) {
  if (to.name === 'work') {
    Store.authenticate({})
      .then(() => next())
      .catch(() => redirect('/protected'))
  } else {
    next()
  }
}
