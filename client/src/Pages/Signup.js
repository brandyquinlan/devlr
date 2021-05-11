import React, { useState, useRef, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { StoreContext } from '../utils/GlobalState'
import API from '../utils/API'
import 'react-toastify/dist/ReactToastify.css'

function Signup() {
  const [store, dispatch] = useContext(StoreContext)
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const emailRef = useRef()
  const passwordRef = useRef()

  function handleInputChange(event) {
    event.preventDefault()

    setState({
      ...state,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
  }

  function errorToast() {
    toast.error('That user already exists', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  function signUp(event) {
    event.preventDefault()
    const userInfo = {
      email: state.email,
      password: state.password,
    }

    API.signUp(userInfo)
      .then(() => {
        API.login(userInfo)
        window.location.href =
          'https://github.com/login/oauth/authorize?client_id=4e245c141737668a0fe8'
      })
      .catch(() => {
        errorToast()
      })
  }

  return (
    <div>
      <div id="signupWrapper">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="d-flex flex-row align-items-center justify-content-around">
          <div className="tab bg-secondary gradient">
            <h1>devlr</h1>
            <h4>Sign Up</h4>
            <div className="separator mt-4"></div>
            <form className="signup" onSubmit={signUp}>
              <div className="form-group">
                <label htmlFor="inputEmail2">Email address</label>
                <input
                  ref={emailRef}
                  onChange={handleInputChange}
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword2">Password</label>
                <input
                  ref={passwordRef}
                  onChange={handleInputChange}
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-secondary gradient float-right"
                onClick={signUp}
              >
                Sign Up
              </button>
            </form>
            <br />
            <h6>
              Or log in
              <a href="/login">
                <span style={{ fontWeight: '300' }}> here</span>
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
