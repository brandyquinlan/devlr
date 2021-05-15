import React, { useEffect, useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import API from '../../utils/API'

function BrowseUsersModal(props) {
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
    API.getAllUsers().then((res) => setUsers(res))
  }, [props.show])

  // when the component is opened, make sure to sync users with filtered users
  useEffect(() => {
    setFilteredUsers(users)
  }, [users])

  // Running the filter on the displayed users
  useEffect(() => {
    // Imediately, if the searchvalue is anything less than one character, there is no point in filtering the array
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
          Browse Users
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <input
            ref={searchRef}
            type="text"
            className="form-control"
            placeholder="Search for other users"
            onChange={handleInputChange}
          />
        </div>
        <div>
          {/* This should be replaces by a custom componant, taking in props to display user information */}
          {filteredUsers.map((user) => (
            <div key={user._id}>
              <h4>{user.name}</h4>
              <img
                src={user.avatarUrl}
                alt="User profile"
                className="img-fluid circle"
                height="150"
                width="150"
              />
              {/*  Need to set up another "home" that we will use for displaying another users Info */}
              <a href={`/home/?user=${user._id}`}>profile</a>
            </div>
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
