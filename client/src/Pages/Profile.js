import React, { useEffect, useContext, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { UserContext } from '../utils/UserState'
import { ModalContext } from '../utils/ModalState'
import API from '../utils/API'
import useViewport from '../utils/useViewport'
import Sidenav from '../Components/Sidenav/Sidenav'
import MobileSidenav from '../Components/Sidenav/MobileSidenav'
import ProfileNavbar from '../Components/Nav/ProfileNavbar'
import Tab from '../Components/Tab'
import InitialLoginModal from '../Components/Modals/InitialLoginModal'
import FeaturedDevs from '../Components/FeaturedDevs/FeaturedDevs'
import NoExpandTab from '../Components/NoExpandTab'
import Toast from '../utils/Toast'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [store, dispatch] = useContext(UserContext)
  const [modals, udpateModal] = useContext(ModalContext)
  const [authenticating, setAuthenticating] = useState(true)
  const [loadingData, setLoadingData] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [posts, setPosts] = useState([])
  const userId = useQuery().get('user')
  const [projects, setProjects] = useState([])

  // checking if the user just came from a redirect by searching the url for a code
  // If there is a code, its what we use to get an access token and set it on the user
  useEffect(() => {
    window.history.pushState({}, null, `/profile`)
    API.getUserInfo(userId)
      .then(([user, profile]) => {
        console.log(user, profile)
        const { _id, accessToken } = user
        const { githubUsername } = profile
        if (_id) {
          dispatch({ type: 'target user', payload: profile })
          API.getGithubInfo(githubUsername, accessToken).then((info) => {
            setProjects(info.user.pinnedItems.nodes)
          })
          API.getPosts(_id).then((postRes) => {
            setPosts(postRes)
            setAuthenticated(true)
            setLoadingData(false)
          })
        }
      })
      .catch(() => {
        window.location.href = `/login`
      })
  }, [userId])

  // load all user data and then set authenticating(false) to render the page
  useEffect(() => {
    API.getUserInfo()
      .then(([user, profile]) => {
        // Storing the user and the profile in the context seperately, since that is how they are in the db
        dispatch({ type: 'set user', payload: user })
        dispatch({ type: 'set profile', payload: profile })
        setAuthenticating(false)
      })
      .catch((err) => {
        console.error('Failed to get use information', err)
        setAuthenticating(false)
      })
  }, [loadingData])

  const { width } = useViewport()
  const breakpoint = 768
  const { themePref } = store.targetUser

  useEffect(() => {
    if (!themePref) return

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
    }
  }, [store.profile])

  return (
    <div className="container">
      {authenticating ? (
        <Spinner animation="border" />
      ) : (
        [
          loadingData ? (
            <Spinner animation="border" />
          ) : (
            [
              authenticated === true ? (
                <>
                  <div
                    className="d-flex flex-row align-items-top justify-content-around"
                    id="col1"
                  >
                    {width < breakpoint ? <MobileSidenav /> : <Sidenav />}
                    <div
                      className="d-flex flex-column align-items-left"
                      id="col2"
                    >
                      <ProfileNavbar posts={posts} projects={projects} />
                    </div>
                    <div
                      className="d-flex flex-column align-items-right ml-4"
                      id="col3"
                    >
                      <NoExpandTab title="Featured Devs">
                        <FeaturedDevs />
                      </NoExpandTab>
                      <Tab title="Ad" />
                    </div>
                  </div>
                  <InitialLoginModal
                    show={modals.initialModalShow}
                    onHide={() => {
                      udpateModal({ type: 'hide initial modal' })
                    }}
                  />
                </>
              ) : (
                <Redirect to="/login" />
              ),
            ]
          ),
        ]
      )}
    </div>
  )
}

export default Home
