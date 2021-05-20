import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../utils/UserState'
import { Button } from 'react-bootstrap'
import API from '../../utils/API'

function FollowBtn({ profile }) {
  const [store, dispatch] = useContext(UserContext)
  const [isFollowing, setFollowing] = useState()
  const { following } = store.profile

  useEffect(() => {
    following.includes(profile.user) ? setFollowing(true) : setFollowing(false)
  }, [])

  function addFollow(event) {
    event.preventDefault()
    const userObj = {
      user: store.user,
    }

    API.followUser(profile.user, store.user._id)
      .then(() => {
        setFollowing(true)
        dispatch({ type: 'add following', payload: userObj })
      })
      .catch(() => {
        Toast('error', "We're sorry, something went wrong", 1000)
      })
  }

  function unFollow(e) {
    e.preventDefault()
    const newFollowing = [...following]
    const splicedFollowing = newFollowing.filter((u) => u.user !== profile.user)

    API.unfollowUser(profile.user, store.user._id)
      .then(() => {
        setFollowing(false)
        dispatch({ type: 'remove following', payload: splicedFollowing })
      })
      .catch(() => {
        Toast('error', "We're sorry, something went wrong", 1000)
      })
  }

  return (
    <div>
      {isFollowing ? (
        <Button
          variant="secondary"
          size="lg"
          id="mobileBtn"
          onClick={(e) => unFollow(e)}
        >
          <span className="material-icons" style={{ marginLeft: '-4px' }}>
            person_remove
          </span>
        </Button>
      ) : (
        <Button
          variant="secondary"
          size="lg"
          id="mobileBtn"
          onClick={(e) => addFollow(e)}
        >
          <span className="material-icons" style={{ marginLeft: '-4px' }}>
            person_add
          </span>
        </Button>
      )}
    </div>
  )
}

export default FollowBtn
