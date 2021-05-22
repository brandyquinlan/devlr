import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import { TargetUserContext } from '../../utils/TargetUserState'
import AppearanceModal from '../Modals/AppearanceModal'
import NewPostModal from '../Modals/NewPostModal'
import MobileFollowBtn from './MobileFollowBtn'

function User({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [postModalShow, setPostModalShow] = React.useState(false)
  const [appearanceModalShow, setAppearanceModalShow] = React.useState(false)

  const { profile } = targetUser.profile ? targetUser : store

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <img
          src={profile.avatarUrl}
          alt="user avatar"
          className="circle"
          height="50"
          width="50"
        />
        {home ? (
          <div>
            <Button
              type="button"
              variant="secondary"
              id="mobileBtn"
              onClick={() => setAppearanceModalShow(true)}
            >
              <span className="material-icons" style={{ fontSize: '25px' }}>
                palette
              </span>
            </Button>
            <AppearanceModal
              show={appearanceModalShow}
              onHide={() => setAppearanceModalShow(false)}
            />
          </div>
        ) : (
          <MobileFollowBtn profile={profile} />
        )}
      </div>
    </>
  )
}

export default User
