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
      window.location.href = '/home'
      return {
        ...state,
        user: action.payload,
      }
    case 'sign up':
      window.location.href = '/home'
      return {
        ...state,
        user: action.payload,
      }
    default:
      throw new Error('something went wrong with Reducer switch case')
  }
}

export default Reducer
