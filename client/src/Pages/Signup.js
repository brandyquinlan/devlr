import React from 'react'

function Signup() {
  return (
    <div>
      <div id="signupWrapper">
        <div className="d-flex flex-row align-items-center justify-content-around">
          <div className="tab bg-secondary gradient">
            <h1>devlr</h1>
            <h4>Sign Up</h4>
            <div className="separator mt-4"></div>
            <form className="signup">
              <div className="form-group">
                {/* eslint-disable-next-line */}
                <label for="inputEmail2">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                ></input>
              </div>
              <div className="form-group">
                {/* eslint-disable-next-line */}
                <label for="inputPassword2">Password</label>
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
                <span className="msg"></span>
              </div>
              <button
                type="submit"
                className="btn btn-secondary gradient float-right"
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
