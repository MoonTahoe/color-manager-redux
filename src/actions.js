export const addColor = (name, hex) =>
  ({
    type: 'ADD_COLOR',
    payload: {name,hex}
  })

export const removeColor = name => (dispatch, getState) => {
  const colorExists = getState().colors.some(c => c.name.toLowerCase() === name.toLowerCase())
  if (colorExists) dispatch({ type: 'REMOVE_COLOR', payload: {name} })
  else dispatch({ type: 'ERROR', payload: `color '${name}' not found in current color list`})
}
