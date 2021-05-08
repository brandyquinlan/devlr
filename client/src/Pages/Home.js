import React, { useEffect, useContext } from 'react'
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
  const code = useQuery().get('code')
  const { isAuthenticated } = store

  // checking if the user just came from a redirect by searching the url for a code
  // If there is a code, its what we use to get an access token and set it on the user
  useEffect(() => {
    if (!code) return

    API.getUser().then((resUser) => {
      const { _id } = resUser.data
      API.getUserAccessToken(code).then((resToken) => {
        const { token } = resToken.data
        API.setUserAccessToken(token, _id)
      })
    })
    window.history.pushState({}, null, '/home')
  }, [code])

  const { width } = useViewport()
  const breakpoint = 768
  const { themePref } = store.profile

  useEffect(() => {
    // console.log(themePref);
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
  }, [themePref]) // setTheme end tag

  return (
    <div>
      {isAuthenticated === true ? (
        <div
          className="d-flex flex-row align-items-top justify-content-around"
          id="col1"
        >
          {width < breakpoint ? <MobileSidenav /> : <Sidenav />}
          <div className="d-flex flex-column align-items-left" id="col2">
            <Navbar />
          </div>
          <div className="d-flex flex-column align-items-right ml-4" id="col3">
            <Tab title="Featured Devs" />
            <Tab title="Ad" />
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  )
}

export default Home
