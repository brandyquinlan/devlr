import React from 'react'
import { Button } from 'react-bootstrap'
import AppearanceModal from '../Modals/AppearanceModal'
import NewPostModal from '../Modals/NewPostModal'

function User() {
  const [postModalShow, setPostModalShow] = React.useState(false)
  const [appearanceModalShow, setAppearanceModalShow] = React.useState(false)

  return (
    <div className="d-flex flex-column align-items-center">
      <Button
        type="button"
        variant="secondary"
        id="mobileBtn"
        onClick={() => setPostModalShow(true)}
      >
        <span className="material-icons" style={{ fontSize: '26px' }}>
          post_add
        </span>
      </Button>
      <NewPostModal
        show={postModalShow}
        onHide={() => setPostModalShow(false)}
      />
      <Button
        type="button"
        variant="secondary"
        id="mobileBtn"
        onClick={() => setAppearanceModalShow(true)}
      >
        <span className="material-icons" style={{ fontSize: '26px' }}>
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
