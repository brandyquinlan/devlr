import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from '../utils/GlobalState'
import Signup from './Signup'
import useViewport from '../utils/useViewport'
import Sidenav from '../Components/Sidenav/Sidenav'
import MobileSidenav from '../Components/Sidenav/MobileSidenav'
import Navbar from '../Components/Nav/Navbar'
import Tab from '../Components/Tab'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const code = useQuery().get('code')
  console.log(code)
  // eslint-disable-next-line no-unused-vars
  const [store, dispatch] = useContext(StoreContext)
  const { width } = useViewport()
  const breakpoint = 768

  const { themePref } = store.profile

  useEffect(() => {
    axios.post('/api/users/getAccessToken', { code }).then((token) => {
      console.log(token, store.user)
      window.history.pushState({}, null, '/home')
    })
  }, [])

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
      {code ? (
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
        <Signup />
      )}
    </div>
  )
}

export default Home
