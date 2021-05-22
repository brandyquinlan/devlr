import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { TargetUserContext } from '../../utils/TargetUserState'
import { UserContext } from '../../utils/UserState'
import AppearanceModal from '../Modals/AppearanceModal'
import NewPostModal from '../Modals/NewPostModal'
import FollowBtn from './FollowBtn'

function User({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [postModalShow, setPostModalShow] = React.useState(false)
  const [appearanceModalShow, setAppearanceModalShow] = React.useState(false)

  const { profile } = targetUser.profile ? targetUser : store

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {/* <Button
        variant="secondary"
        size="lg"
        id="newBtn"
        onClick={() => setPostModalShow(true)}
      >
        <span className="material-icons" style={{ fontSize: '26px' }}>
          post_add
        </span>
        New Post
      </Button>
      <NewPostModal
        show={postModalShow}
        onHide={() => setPostModalShow(false)}
      /> */}
        <div className="circle" id="userPic">
          <img
            src={profile.avatarUrl}
            alt="User profile"
            className="img-fluid circle"
            height="250"
            width="250"
          />
        </div>
        <div>
          <h5 className="text-center">{profile.name}</h5>
          <h6 className="text-center">
            GitHub:{' '}
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
            >
              {' '}
              {profile.githubUsername}
            </a>
          </h6>
        </div>

        {home ? (
          <div>
            <Button
              variant="secondary"
              size="lg"
              id="appearanceBtn"
              onClick={() => setAppearanceModalShow(true)}
            >
              <span className="material-icons">palette</span>
              Appearance
            </Button>
            <AppearanceModal
              show={appearanceModalShow}
              onHide={() => setAppearanceModalShow(false)}
            />
          </div>
        ) : (
          <FollowBtn profile={profile} />
          // <Button
          //   variant="secondary"
          //   size="lg"
          //   id="appearanceBtn"
          //   onClick={(e) => addFollow(e)}
          // >
          //   <span className="material-icons" style={{ fontSize: '26px' }}>
          //     person_add
          //   </span>
          //   Follow
          // </Button>
        )}
      </div>
    </>
  )
}

export default User
