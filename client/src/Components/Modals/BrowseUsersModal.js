import React, { useEffect, useRef, useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import DevCard from '../User/DevCard'

function BrowseUsersModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [search, setSearch] = useState('')
  const searchRef = useRef()

  // Handle search input change
  function handleInputChange(event) {
    event.preventDefault()
    setSearch(searchRef.current.value)
  }

  // When component opens, call the db
  useEffect(() => {
    if (!props.show) return
    API.getAllUsers().then((res) =>
      setUsers(res.filter((user) => user.user !== store.user._id)),
    )
  }, [props.show])

  // when the component is opened, make sure to sync users with filtered users
  useEffect(() => {
    setFilteredUsers(users)
  }, [users])

  // Running the filter on the displayed users
  useEffect(() => {
    // Immediately, if the searchvalue is anything less than one character, there is no point in filtering the array
    if (!search) return

    setFilteredUsers(
      users.filter((user) => {
        const searchCredentials =
          user.name.toLowerCase() + user.githubUsername.toLowerCase()
        return searchCredentials.includes(search.toLowerCase())
      }),
    )

    return () => {
      setFilteredUsers(users)
    }
  }, [search])

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>
            Browse Users{' '}
            <i className="material-icons" style={{ fontSize: '26px' }}>
              groups
            </i>
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <input
            ref={searchRef}
            type="text"
            className="form-control"
            placeholder="Dev Doe"
            onChange={handleInputChange}
          />
        </div>
        <div>
          {filteredUsers.map((user, i) => (
            <DevCard
              key={`filter${user._id}`}
              id={user._id}
              user={user.user}
              avatarUrl={user.avatarUrl}
              name={user.name}
            />
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BrowseUsersModal
