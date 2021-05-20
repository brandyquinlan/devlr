import React, { useEffect, useContext, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { UserContext } from '../utils/UserState'
import { TargetUserContext } from '../utils/TargetUserState'
import { PostContext } from '../utils/PostState'
import { ModalContext } from '../utils/ModalState'
import API from '../utils/API'
import useViewport from '../utils/useViewport'
import Sidenav from '../Components/Sidenav/Sidenav'
import MobileSidenav from '../Components/Sidenav/MobileSidenav'
import Navbar from '../Components/Nav/Navbar'
import Tab from '../Components/Tab'
import InitialLoginModal from '../Components/Modals/InitialLoginModal'
import FeaturedDevs from '../Components/FeaturedDevs/FeaturedDevs'
import NoExpandTab from '../Components/NoExpandTab'
import Toast from '../utils/Toast'
import ScrollToTop from '../utils/ScrollToTop'
import Footer from '../Components/Footer'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Profile = () => {
  const [store, dispatch] = useContext(UserContext)
  const [posts, postDispatch] = useContext(PostContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [modals, modalDispatch] = useContext(ModalContext)
  const [authenticating, setAuthenticating] = useState(true)
  const [loadingData, setLoadingData] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const userId = useQuery().get('user')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (!userId) window.location.href = '/login'
    // window.history.pushState({}, null, `/profile`)
    API.getUserInfo(userId)
      .then(([user, profile]) => {
        const { _id, accessToken } = user
        const { githubUsername } = profile
        if (_id) {
          targetDispatch({ type: 'set target', payload: { profile } })

          API.getGithubInfo(githubUsername, accessToken).then((info) => {
            setProjects(info.user.pinnedItems.nodes)
          })
          API.getPosts(_id).then((postRes) => {
            postDispatch({ type: 'set posts', payload: postRes })
            setAuthenticated(true)
            setLoadingData(false)
          })
        }
      })
      .catch(() => {
        window.location.href = `/login`
      })
  }, [])

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
        console.error('Failed to load user information', err)
        setAuthenticating(false)
      })
  }, [loadingData])

  const { width } = useViewport()
  const breakpoint = 900

  useEffect(() => {
    if (!targetUser.profile) return
    const { themePref } = targetUser?.profile

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
  }, [targetUser])

  return (
    <>
    <div className="container mainWrapper">
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
                    {width < breakpoint ? <MobileSidenav home={false} /> : <Sidenav home={false} />}
                    <div
                      className="d-flex flex-column align-items-left"
                      id="col2"
                    >
                      <Navbar
                        projects={projects}
                        home={false}
                        followers={targetUser.profile.followers}
                        following={targetUser.profile.following}
                      />
                      <ScrollToTop />
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
                      modalDispatch({ type: 'hide initial modal' })
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
    <Footer />
    </>
  )
}

export default Profile
