import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { StoreContext } from '../../utils/GlobalState'
import AppearanceModal from '../Modals/AppearanceModal'
import NewPostModal from '../Modals/NewPostModal'

function User() {
  const [store, dispatch] = useContext(StoreContext)
  const [postModalShow, setPostModalShow] = React.useState(false)
  const [appearanceModalShow, setAppearanceModalShow] = React.useState(false)

  setTimeout(() => {
    console.log(store)
  }, 2000)

  return (
    <div className="d-flex flex-column align-items-center">
      <Button
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
      />
      <div className="circle" id="userPic">
        <img src={store.profile.avatarUrl} alt="User profile" />
      </div>
      <Button
        variant="secondary"
        size="lg"
        id="appearanceBtn"
        onClick={() => setAppearanceModalShow(true)}
      >
        <span className="material-icons" style={{ fontSize: '26px' }}>
          palette
        </span>
        Appearance
      </Button>
      <AppearanceModal
        show={appearanceModalShow}
        onHide={() => setAppearanceModalShow(false)}
      />
    </div>
  )
}

export default User
