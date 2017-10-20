import { addColor, removeColor } from './actions'

describe("Action Creators - @current", () => {

  it("addColor(name, hex) - SUCCESS!", () =>
    expect(addColor('test color', '#000'))
      .toEqual({
        type: 'ADD_COLOR',
        payload: {
          name: 'test color',
          hex: '#000'
        }
      })
  )

  describe('Removing colors', () => {

    let _dispatch, _getState

    beforeAll(() => {
      _getState = () => ({
        colors: [
          { name: 'fake color', hex: '#000' },
          { name: 'test color', hex: '#FFF' },
          { name: 'fake', hex: '#AAA' }
        ]
      })
      _dispatch = jest.fn()
    })

    afterEach(() => {
      _dispatch.mockReset()
    })

    it("removeColor(name) - SUCCESS!", () => {
      const expectedAction = {
        type: 'REMOVE_COLOR',
        payload: {
          name: 'test color'
        }
      }
      removeColor('test color')(_dispatch, _getState)
      expect(_dispatch.mock.calls[0][0]).toEqual(expectedAction)
    })

    it("removeColor(name) - ERROR SUCCESS!", () => {
      const expectedAction = {
        type: 'ERROR',
        payload: "color 'not found' not found in current color list"
      }
      removeColor('not found')(_dispatch, _getState)
      expect(_dispatch.mock.calls[0][0]).toEqual(expectedAction)
    })

  })

})
