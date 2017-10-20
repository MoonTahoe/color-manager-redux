import { defineSupportCode } from 'cucumber'
import { expect } from 'chai'
import { storeFactory, actions } from '../../'

defineSupportCode(function({ Given, When, Then }) {

  When('I add the color:', function (dataTable) {
    const [ name, hex ] = dataTable.rawTable[0]
    const { addColor } = actions
    this.store.dispatch(addColor(name, hex))
  })

  When('I remove the color {string}', function (color) {
    const { removeColor } = actions
    this.store.dispatch(removeColor(color))
  })

  Then('I should see the following error:', function (dataTable) {
    const [ message ] = dataTable.rawTable[0]
    const { errors } = this.store.getState()
    expect(errors).to.deep.equal([message])
  })

  Then('I should see the following colors:', function (dataTable) {
     const [, ...rows] = dataTable.rawTable
     const expectedColors = rows.map(([name, hex]) => ({name, hex}))
     const { colors } = this.store.getState()
     expect(colors).to.deep.equal(expectedColors)
  })

})
