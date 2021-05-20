import React, { useEffect, useContext, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { UserContext } from '../utils/UserState'
import { PostContext } from '../utils/PostState'
import { TargetUserContext } from '../utils/TargetUserState'
import { ModalContext } from '../utils/ModalState'
import { socket } from '../utils/socket'
import API from '../utils/API'
import useViewport from '../utils/useViewport'
import Sidenav from '../Components/Sidenav/Sidenav'
import MobileSidenav from '../Components/Sidenav/MobileSidenav'
import Navbar from '../Components/Nav/Navbar'
import Tab from '../Components/Tab'
import InitialLoginModal from '../Components/Modals/InitialLoginModal'
import FeaturedDevs from '../Components/FeaturedDevs/FeaturedDevs'
import Footer from '../Components/Footer'
import NoExpandTab from '../Components/NoExpandTab'
import ScrollToTop from '../utils/ScrollToTop'
import StackOverflow from '../assets/img/stackoverflow.png'
import KUad from '../assets/img/KU-ad.png'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [posts, postDispatch] = useContext(PostContext)
  const [modals, modalDispatch] = useContext(ModalContext)
  const [authenticating, setAuthenticating] = useState(true)
  const [loadingData, setLoadingData] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const code = useQuery().get('code')
  const [projects, setProjects] = useState([])

  // checking if the user just came from a redirect by searching the url for a code
  // If there is a code, its what we use to get an access token and set it on the user
  useEffect(() => {
    // if they came with a code, that means they just signed up, so we want to authenticate them really quick,
    // and then set their access token on them.
    if (code) {
      window.history.pushState({}, null, '/home')
      API.getUserInfo().then(([user, profile]) => {
        setAuthenticated(true)
        const { _id } = user
        const { githubUsername } = profile
        API.getUserAccessToken(code).then((resToken) => {
          const { token } = resToken.data
          API.setUserAccessToken(token, _id)
          API.getGithubInfo(githubUsername, token).then((info) => {
            setProjects(info.user.pinnedItems.nodes)
          })
          API.getAndSaveProfilePic(githubUsername, token, _id).then(() => {
            setLoadingData(false)
            modalDispatch({ type: 'show initial modal' })
          })
        })
      })
    } else {
      API.getUserInfo()
        .then(([user, profile]) => {
          const { _id, accessToken } = user
          const { githubUsername } = profile
          if (_id) {
            API.getGithubInfo(githubUsername, accessToken).then((info) => {
              setProjects(info.user.pinnedItems.nodes)
            })
            API.getFollowingPosts(_id).then((postRes) => {
              postDispatch({ type: 'set posts', payload: postRes })
              setAuthenticated(true)
              setLoadingData(false)
            })
          }
        })
        .catch(() => {
          window.location.href = '/login'
        })
    }
  }, [code])

  // load all user data and then set authenticating(false) to render the page
  useEffect(() => {
    API.getUserInfo()
      .then(([user, profile]) => {
        // Storing the user and the profile in the context seperately, since that is how they are in the db
        dispatch({
          type: 'going home',
          payload: {
            user,
            profile,
          },
        })
        targetDispatch({ type: 'set target', payload: {} })

        socket.emit('storeClientInfo', { userId: user._id })

        setAuthenticating(false)
      })
      .catch((err) => {
        console.error('Failed to get use information', err)
        setAuthenticating(false)
      })
  }, [loadingData])

  const { width } = useViewport()
  const breakpoint = 900
  const { themePref } = store.profile

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
    <>
      <main className="container mainWrapper">
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
                      {width < breakpoint ? (
                        <MobileSidenav home={true} />
                      ) : (
                        <Sidenav home={true} />
                      )}
                      <div
                        className="d-flex flex-column align-items-left"
                        id="col2"
                      >
                        <Navbar projects={projects} home={true} />
                        <ScrollToTop />
                      </div>
                      <div
                        className="d-flex flex-column align-items-right ml-4"
                        id="col3"
                      >
                        <NoExpandTab title="Featured Devs">
                          <FeaturedDevs />
                        </NoExpandTab>
                        <Tab title="Ads" expanded>
                          <a
                            href="https://bootcamp.ku.edu/coding/landing"
                            target="_blank"
                          >
                            <img
                              src={KUad}
                              style={{ width: '250px' }}
                              alt="KU Coding Boot Camp"
                              className="my-3"
                            ></img>
                          </a>
                          <a href="https://stackoverflow.com/" target="_blank">
                            <img
                              src={StackOverflow}
                              style={{ width: '250px' }}
                              alt="Stack Overflow"
                              className="my-3"
                            ></img>
                          </a>
                        </Tab>
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
      </main>
      <Footer />
    </>
  )
}

export default Home
