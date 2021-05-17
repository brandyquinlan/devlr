import API from './API'

function UserReducer(state, action) {
  switch (action.type) {
    case 'going home':
      return action.payload
    case 'change theme':
      return {
        ...state,
        profile: {
          ...state.profile,
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
    case 'set user id for password reset':
      return {
        ...state,
        user: {
          _id: action.payload,
        },
      }
    case 'logout':
      API.logout()
      window.location.href = '/login'
      break
    // Set user profile should be used for inital sign ups / logins
    case 'set user profile':
      return {
        ...state,
        profile: action.payload,
      }
    // Make sure to use this type if you are only UPDATING the profile in the state
    case 'update profile':
      const newProfile = { ...state.profile }
      Object.keys(action.payload).forEach((key) => {
        newProfile[key] = action.payload[key]
      })
      return {
        ...state,
        profile: newProfile,
      }
    default:
      throw new Error('something went wrong with UserReducer switch case')
  }
}

export default UserReducer
