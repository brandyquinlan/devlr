import API from './API'

function UserReducer(state, action) {
  switch (action.type) {
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
    case 'set user token':
      return {
        ...state,
        accessToken: action.payload,
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
    case 'add following':
      const newFollowing = JSON.parse(JSON.stringify(state.profile.following))
      newFollowing.push(action.payload)
      return {
        ...state,
        profile: {
          ...state.profile,
          following: newFollowing,
        },
      }
    case 'remove following':
      return {
        ...state,
        profile: {
          ...state.profile,
          following: action.payload,
        },
      }
    default:
      throw new Error('something went wrong with UserReducer switch case')
  }
}

export default UserReducer
