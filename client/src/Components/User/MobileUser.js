import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import AppearanceModal from '../Modals/AppearanceModal'
import { UserContext } from '../../utils/UserState'
import NewPostModal from '../Modals/NewPostModal'

function User() {
  const [store, dispatch] = useContext(UserContext)
  const [postModalShow, setPostModalShow] = React.useState(false)
  const [appearanceModalShow, setAppearanceModalShow] = React.useState(false)

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        src={store.profile.avatarUrl}
        alt="user avatar"
        className="circle"
        height="50"
        width="50"
      />
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
  )
}

export default User
