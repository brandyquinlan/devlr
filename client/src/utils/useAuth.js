// import { useEffect, useContext } from 'react'
// import { useLocation } from 'react-router-dom'
// import { StoreContext } from './GlobalState'
import API from './API'

// When the use gets redirected home after the github oauth
// we have to use React Router hooks to access the code from the
// URL query. See useEffect below for more
// function useQuery() {
//   return new URLSearchParams(useLocation().search)
// }

async function useAuth() {
  //   const code = useQuery().get('code')
  let authenticated = false
  const user = await API.getUser()
  if (user.data) authenticated = true
  // eslint-disable-next-line
  //   const [store, dispatch] = useContext(StoreContext)
  //   // This could probably be cleaned up and turned into its own hook
  //   // If we have a code in the URL, take that code and get an access token from github
  //   // And then set the access token to the user
  //   useEffect(() => {
  //     if (!code) returnƒ
  //     try {
  //       API.login(store.user).then(() => {
  //         API.getUserAccessToken(code).then((response) => {
  //           const { token } = response.data
  //           // dispatch({ type: 'set user access token', payload: accessToken })
  //           API.setUserAccessToken(token).then((user) =>
  //             console.log(`user ${user}`),
  //           )
  //           window.history.pushState({}, null, '/home')
  //         })
  //       })
  //     } catch (err) {
  //       throw new Error(err)
  //     }
  //   }, [])

  return authenticated
}

export default useAuth
