import React, { useEffect, useContext, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { StoreContext } from '../utils/GlobalState'
import API from '../utils/API'
import useViewport from '../utils/useViewport'
import Sidenav from '../Components/Sidenav/Sidenav'
import MobileSidenav from '../Components/Sidenav/MobileSidenav'
import Navbar from '../Components/Nav/Navbar'
import Tab from '../Components/Tab'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [store, dispatch] = useContext(StoreContext)
  const [authenticating, setAuthenticating] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const code = useQuery().get('code')

  // checking if the user just came from a redirect by searching the url for a code
  // If there is a code, its what we use to get an access token and set it on the user
  useEffect(() => {
    async function authenticateUser() {
      await API.checkUser().then(({ data }) => {
        if (data._id) {
          setAuthenticated(true)
        }
      })
    }

    if (code) {
      API.checkUser().then(({ data }) => {
        const { _id } = data
        API.getUserAccessToken(code).then((resToken) => {
          const { token } = resToken.data
          API.setUserAccessToken(token, _id)
        })
      })
      setAuthenticated(true)
      window.history.pushState({}, null, '/home')
    } else {
      authenticateUser()
    }
  }, [code])

  // load all data and then set authenticated(true) to render the page
  useEffect(() => {
    API.getUserInfo()
      .then(({ data }) => {
        const [user, profile] = data
        dispatch({ type: 'set user', payload: user })
        dispatch({ type: 'set profile', payload: profile })
        setAuthenticating(false)
      })
      .catch((err) => console.error('error in state set, navbar.js', err))
  }, [authenticated])

  const { width } = useViewport()
  const breakpoint = 768
  const { themePref } = store.profile

  useEffect(() => {
    if (!themePref);
    else {
      const r = document.querySelector(':root')
      const color = themePref

      if (color === 'linen') {
        r.style.setProperty('--main-bg-color', `#${color}`)
        r.style.setProperty('--main-text-color', '#222222')
        // r.style.setProperty('--secondary-bg-color', '#979797')
      } else {
        r.style.setProperty('--main-bg-color', `#${color}`)
        r.style.setProperty('--main-text-color', 'linen')
        r.style.setProperty('--secondary-bg-color', 'transparent')
      } // nested if else end tag
    } // main if else end tag
  }, [store.profile]) // setTheme end tag

  return (
    <div className="container">
      {authenticating ? (
        <Spinner animation="border" />
      ) : (
        [
          authenticated === true ? (
            <div
              className="d-flex flex-row align-items-top justify-content-around"
              id="col1"
            >
              {width < breakpoint ? <MobileSidenav /> : <Sidenav />}
              <div className="d-flex flex-column align-items-left" id="col2">
                <Navbar />
              </div>
              <div
                className="d-flex flex-column align-items-right ml-4"
                id="col3"
              >
                <Tab title="Featured Devs" />
                <Tab title="Ad" />
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          ),
        ]
      )}
    </div>
  )
}

export default Home
