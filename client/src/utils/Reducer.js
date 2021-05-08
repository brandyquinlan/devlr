import API from './API'

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
    case 'set user':
      return {
        ...state,
        user: action.payload,
      }
    case 'set user access token':
      return {
        ...state,
        user: {
          accessToken: action.payload,
        },
      }
    case 'logout':
      API.logout()
      window.location.href = '/login'
      return {
        user: {},
        profile: {
          themePref: '222222',
        },
      }
    default:
      throw new Error('something went wrong with Reducer switch case')
  }
}

export default Reducer
