import React from 'react'

function Login() {
  return (
    <div id="loginWrapper">
      <div className="d-flex flex-row align-items-center justify-content-around">
        <div className="tab bg-secondary gradient">
          <h1>devlr</h1>
          <h4>Log In</h4>
          <div className="separator mt-4"></div>
          <form className="login">
            <div className="form-group">
              {/* eslint-disable-next-line */}
              <label for="inputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
              ></input>
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line */}
              <label for="inputPassword1">Password</label>
              <input
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
            <button type="submit" className="btn btn-secondary gradient">
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
