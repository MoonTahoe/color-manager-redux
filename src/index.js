import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

export * as actions from './actions'

export const storeFactory = (initialState={}, middleware=[]) =>
  (middleware && middleware.length) ?
    applyMiddleware(...[thunk, ...middleware])(createStore)(reducer, initialState) :
    applyMiddleware(thunk)(createStore)(reducer, initialState)
