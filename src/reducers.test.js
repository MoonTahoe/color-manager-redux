import deepFreeze from 'deep-freeze'
import { color, colors, errors } from './reducers'

describe("Reducers - @current", () => {

  describe("color reducer", () => {

    it("ADD_COLOR - SUCCESS!", () => {
      const action = { type: 'ADD_COLOR', payload: { name: 'test color', hex: '#F00' }}
      const state = {}
      const expected = { name: 'test color', hex: '#F00' }
      deepFreeze(action)
      deepFreeze(state)
      const actual = color(state, action)
      expect(actual).toEqual(expected)
    })

  })

  describe("colors reducer", () => {

    it("ADD_COLOR - SUCCESS!", () => {
      const action = { type: 'ADD_COLOR', payload: { name: 'test color', hex: '#F00' }}
      const state = [{ name: 'fake color', hex: '#000' }]
      const expected = [
        { name: 'fake color', hex: '#000' },
        { name: 'test color', hex: '#F00' }
      ]
      deepFreeze(action)
      deepFreeze(state)
      const actual = colors(state, action)
      expect(actual).toEqual(expected)
    })

    it("REMOVE_COLOR - SUCCESS!", () => {
      const action = { type: 'REMOVE_COLOR', payload: { name: 'test color' }}
      const state = [
        { name: 'fake color', hex: '#000' },
        { name: 'test color', hex: '#FFF' },
        { name: 'fake', hex: '#AAA' }
      ]
      const expected = [
        { name: 'fake color', hex: '#000' },
        { name: 'fake', hex: '#AAA' }
      ]
      deepFreeze(action)
      deepFreeze(state)
      const actual = colors(state, action)
      expect(actual).toEqual(expected)
    })

  })

  describe("errors reducer", () => {

    it("ERROR - SUCCESS!", () => {
      const action = { type: 'ERROR', payload: "color 'test color' could not be found in current color list"}
      const state = []
      const expected = ["color 'test color' could not be found in current color list"]
      deepFreeze(action)
      deepFreeze(state)
      const actual = errors(state, action)
      expect(actual).toEqual(expected)
    })

  })

})
