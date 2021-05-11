import API from './API'

function Reducer(state, action) {
  switch (action.type) {
    case 'change theme':
      return {
        ...state,
        profile: {
          themePref: action.payload,
        },
      }
    case 'set user':
      return {
        ...state,
        user: action.payload,
      }
    case 'set profile':
      return {
        ...state,
        profile: action.payload,
      }
    case 'logout':
      API.logout()
      window.location.href = '/login'
      break
    default:
      throw new Error('something went wrong with Reducer switch case')
  }
}

export default Reducer
