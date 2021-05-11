import React, { useState, useRef } from 'react'
import { ToastContainer, Flip, toast } from 'react-toastify'
import API from '../utils/API'
import 'react-toastify/dist/ReactToastify.css'

function Signup() {
  const [state, setState] = useState({
    email: '',
    password: '',
    githubUsername: '',
  })

  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()
  const githubRef = useRef()

  function handleInputChange(event) {
    event.preventDefault()

    setState({
      ...state,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      githubUsername: githubRef.current.value,
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

  function matchError() {
    toast.error('Your passwords must match', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  function emptyError() {
    toast.error('Your password cannot be empty', {
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
    if (passwordRef.current.value !== confirmRef.current.value) {
      matchError()
      return
    }

    if (passwordRef.current.value === '') {
      emptyError()
      return
    }

    API.signUp(state)
      .then(() => {
        API.login({
          email: state.email,
          password: state.password,
        })
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
          transition={Flip}
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
                  placeholder="email"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  ref={passwordRef}
                  onChange={handleInputChange}
                  type="password"
                  className="form-control"
                  id="passawordInput"
                  placeholder="password"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput2">Confirm password</label>
                <input
                  ref={confirmRef}
                  onChange={handleInputChange}
                  type="password"
                  className="form-control"
                  id="passawordInput2"
                  placeholder="confirm password"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="githubUsername">Github username</label>
                <input
                  ref={githubRef}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="passawordInput"
                  placeholder="github username"
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
            <h6 style={{ fontWeight: '100' }}>
              Or log in{' '}
              <a href="/login">
                <span style={{ fontWeight: '400' }}>here</span>
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
