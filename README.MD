BDD Redux Client - The Color Manager
====================================
This is a example of a redux client that was developed using BDD. This client allows
users to add and remove colors from a list. This is an example that was described in a talk, and
those [slides](https://github.com/MoonTahoe/color-manager-redux/blob/master/MH%20-%20BDD%20and%20Redux%20Talk.pdf) are avaialbe in this repo.

Installation
------------
`npm install --save color-manager-redux`

  -or-

`yarn add color-manager-redux`

Creating Color Stores
----------------

### Creating a basic store
This is an example of how to create a store and dispatch an __ADD_COLOR__ action
using an action creator.

```javascript
import { storeFactory, actions } from 'color-manager-redux'

const store = storeFactory()

store.dispatch(
  actions.addColor('sample color', '#ACA' )
)

console.log(
  store.getState()
)
```

### Creating a store with an initial state
This is an example of how to create a store with a few initial colors:

```javascript
import { storeFactory, actions } from 'color-manager-redux'

let initialState = {
  colors: [
    { name: 'rad red', hex: '#FF0000' },
    { name: 'lawn', hex: '#00FF00' },
    { name: 'ocean', hex: '#0000FF' }
  ]
}

const store = storeFactory(initialState)

store.dispatch(
  actions.removeColor('lawn')
)

console.log(
  store.getState()
)
```


### Injecting middleware into the store
This is an example of how to inject middleware, like logging into the store.

**note: Stores already incorporate redux-thunk**

```javascript
import { storeFactory, actions } from 'color-manager-redux'

const myLogger = store => next => action => {
  console.log('-------------> ', action.type, action.payload)
  return next(action)
}

const store = storeFactory({}, [myLogger])

store.dispatch(actions.addColor('lawn', `#00FF00`))
store.dispatch(actions.addColor('ocean', `#0000FF`))
store.dispatch(actions.removeColor('lawn'))

console.log(
  store.getState()
)
```

### Errors
At present the only display error that is recorded is when a user tries to remove
a color that does not exist:

```javascript
import { storeFactory, actions } from 'color-manager-redux'

const store = storeFactory()

// Will dispatch an ERROR action and add an error to state for display
store.dispatch(actions.removeColor('lawn'))

console.log(
  store.getState()
)
```

Give it a Shot
--------------
I am accepting pull requests that include creative ways to extend this client. This
is a place where you can test out BDD. Your pull request must include: a cucumber feature
or scenario, some jest unit tests, and `README.MD` instructions on how to use your new feature.
