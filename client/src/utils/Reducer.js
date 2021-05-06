const Reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        this: 'is an example',
      }
    case 'change theme':
      return {
        ...state,
        profile: {
          themePref: action.payload,
        },
      }
    case 'login':
      return {
        ...state,
        user: action.payload.user,
        profile: action.payload.profile,
      }
    default:
      throw new Error('something went wrong with Reducer switch case')
  }
}

export default Reducer
