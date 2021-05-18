import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'

function DevCard(props) {
  const [store, dispatch] = useContext(UserContext)
  const { following } = store.profile

  function addFollow(event, user) {
    event.preventDefault()
    const userObj = {
      user,
    }
    // send to db  -  can we link to profile instead of user?
    // also need to somehow update the other user and list this person as a follower
    dispatch({ type: 'add following', payload: userObj })
  }

  function unFollow(e, user) {
    e.preventDefault()
    const userObj = {
      user,
    }
    const newFollowing = [...following]
    const splicedFollowing = newFollowing.filter((u) => u.user !== user)

    dispatch({ type: 'remove following', payload: splicedFollowing })
  }

  return (
    <div className="devTab">
      {following.length === 0 ? (
        <div>
          <a href={`/profile?user=${props.user}`}>
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
      ) : (
        <div>
          <a href={`/profile?user=${props.id}`}>
            <img
              src={props.avatarUrl}
              alt="user avatar"
              className="devPic float-left mr-3"
            />{' '}
            <span className="h6 devLink">{props.name}</span>
          </a>{' '}
          {following.some((f) => f.user === props.user) ? (
            <button
              type="button"
              className="btn-sm newBtn mt-0 ml-2 text-sm"
              id={props.user}
              onClick={(event) => unFollow(event, props.user)}
            >
              <span className="material-icons">person_remove</span>
            </button>
          ) : (
            <button
              type="button"
              className="btn-sm newBtn mt-0 ml-2 text-sm"
              id={props.user}
              onClick={(event) => addFollow(event, props.user)}
            >
              <span className="material-icons">person_add</span>
            </button>
          )}
        </div>
      )}
      <hr />
    </div>
  )
}

export default DevCard
