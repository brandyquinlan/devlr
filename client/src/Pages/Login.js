import React, { useState, useRef, useContext } from 'react'
import { StoreContext } from '../utils/GlobalState'
import API from '../utils/API'

function Login() {
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

  function login(event) {
    event.preventDefault()

    const userInfo = {
      email: state.email,
      password: state.password,
    }
    API.login(userInfo).then(() => {
      window.location.href = '/home'
    })
  }

  return (
    <div id="loginWrapper">
      <div className="d-flex flex-row align-items-center justify-content-around">
        <div className="tab bg-secondary gradient">
          <h1>devlr</h1>
          <h4>Log In</h4>
          <div className="separator mt-4"></div>
          <form className="login" onSubmit={login}>
            <div className="form-group">
              <label htmlFor="inputEmail1">Email address</label>
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
              <label htmlFor="inputPassword1">Password</label>
              <input
                ref={passwordRef}
                onChange={handleInputChange}
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
              ></input>
            </div>
            <div
              style={{ display: 'none' }}
              id="alert"
              className="alert alert-danger"
              role="alert"
            >
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Error:</span>
              <span>
                Login error. Make sure your email and password are entered
                correctly
              </span>
            </div>
            <button
              type="submit"
              className="btn btn-secondary gradient float-right"
            >
              Login
            </button>
          </form>
          <br />
          <h6>
            Or sign up
            <a href="/">
              <span style={{ fontWeight: '300' }}> here</span>
            </a>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Login
