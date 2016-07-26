// Grab store for authentication
import Store from './../store/'

export default function ({ to, next, redirect, abort }) {
  console.log(to)
  if (to.name === 'work') {
    console.log(Store)
    Store.authenticate({})
      .then((user) => {
        next()
      })
      .catch((error) => {
        console.error(error)
        redirect('/protected')
      })
  } else {
    next()
  }
}
