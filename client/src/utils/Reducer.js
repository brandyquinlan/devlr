const Reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        this: 'is an example',
      }
    default:
      throw new Error('something went wrong with Reducer switch case')
  }
}

export default Reducer
