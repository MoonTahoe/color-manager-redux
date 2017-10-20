import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { spy, assert } from 'sinon'
import { storeFactory } from '../../'

defineSupportCode(function({Before, After, Given, When, Then}) {

  Before(function() {
    this.middlwareSpy = spy()
  })

  After(function() {
    this.initState = null
    this.store = null
    this.middlwareSpy = null
  })

  Given('I have the following colors in state:', function (dataTable) {
    const [, ...rows] = dataTable.rawTable
    const colors = rows.map(([name, hex]) => ({name, hex}))
    this.initState = {colors}
  })

  Given('I have a middleware', function () {
    this.testMiddlware = store => next => action => {
      this.middlwareSpy(action.type)
      return next(action)
    }
  })

  When('I create a store', function () {
    const middleware = this.testMiddlware ? [this.testMiddlware] : null
    this.store = storeFactory(this.initState, middleware)
  })

  Then('I should be able to inject initial state data', function () {
    const { colors } = this.store.getState()
    expect(colors).to.deep.equal([
      { name: 'big blue', hex: '#0000FF' },
      { name: 'lawn', hex: '#00FF00' },
      { name: 'crimson', hex: '#FF0000' }
    ])
  })

  Then('the store instance should execute my middleware', function () {
    this.store.dispatch({ type: 'TEST_ACTION' })
    assert.calledWith(this.middlwareSpy, 'TEST_ACTION')
  })

})
