import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'

function DevCard(props) {
  const [store, dispatch] = useContext(UserContext)
  const [isFollowing, setFollowing] = useState()
  const { following } = store.profile
  const href =
    props.user === store.user._id ? '/home' : `/profile?user=${props.user}`

  // Check if the user that is signed in is already following this dev or not
  useEffect(() => {
    following.some((f) => f === props.user)
      ? setFollowing(true)
      : setFollowing(false)
  }, [following])

  function addFollow(event, user) {
    event.preventDefault()
    const userObj = user

    API.followUser(props.user, store.user._id)
      .then(() => {
        setFollowing(true)
        dispatch({ type: 'add following', payload: userObj })
      })
      .catch(() => {
        Toast('error', "We're sorry, something went wrong", 1000)
      })
  }

  function unFollow(e, user) {
    e.preventDefault()
    const splicedFollowing =
      following.length > 1 ? following.filter((u) => u !== user) : []

    API.unfollowUser(props.user, store.user._id)
      .then(() => {
        setFollowing(false)
        dispatch({ type: 'remove following', payload: splicedFollowing })
      })
      .catch(() => {
        Toast('error', "We're sorry, something went wrong", 1000)
      })
  }

  return (
    <div className="ml-3 mr-0 pr-0">
      {/* {following.length === 0 ? (
        <div>
          <a href={href}>
            <img
              src={props.avatarUrl}
              alt="user avatar"
              className="devPic float-left mr-3"
            />{' '}
            <span className="h6 devLink">{props.name}</span>
          </a>
          <button
            type="button"
            className="btn-sm newBtn mt-0 ml-2 text-sm"
            id={props.user}
            onClick={(event) => addFollow(event, props.user)}
          >
            <span className="material-icons">person_add</span>
          </button>
        </div>
      ) : ( */}
      <Row>
        <a href={href}>
          <img
            src={props.avatarUrl}
            alt="user avatar"
            className="float-left mr-3 devPic"
          />{' '}
        </a>{' '}
        <Col>
          <Row>
            <span className="h6 devLink">{props.name}</span>
          </Row>
          <Row>
            {href !== '/home'
              ? [
                  isFollowing ? (
                    <>
                      <button
                        type="button"
                        className="btn-sm newBtn followButton text-sm"
                        id={props.user}
                        onClick={(event) => unFollow(event, props.user)}
                      >
                        <span className="material-icons">person_remove</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn-sm newBtn followButton text-sm"
                        id={props.user}
                        onClick={(event) => addFollow(event, props.user)}
                      >
                        <span className="material-icons">person_add</span>
                      </button>
                    </>
                  ),
                ]
              : null}
          </Row>
        </Col>
      </Row>
      {/* )} */}
      <hr />
    </div>
  )
}

export default DevCard
