import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'

export const color = createReducer({}, {
  'ADD_COLOR': (state, action) => action.payload
})

export const colors = createReducer([], {
  'ADD_COLOR': (state, action) => [...state, color({}, action)],
  'REMOVE_COLOR': (state, action) => state.filter(c => c.name.toLowerCase() !== action.payload.name.toLowerCase())
})

export const errors = createReducer([], {
  'ERROR': (state, action) => [...state, action.payload]
})

export default combineReducers({ colors, errors })
