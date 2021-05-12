import React, { useState, useRef, useEffect } from 'react'
import { ToastContainer, Flip } from 'react-toastify'
import { Badge } from 'react-bootstrap'
import PasswordValidator from 'password-validator'
import Toast from '../utils/Toast'
import API from '../utils/API'
import 'react-toastify/dist/ReactToastify.css'

const schema = new PasswordValidator()

schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123'])

function Signup() {
  const [state, setState] = useState({
    email: '',
    password: '',
    githubUsername: '',
  })
  const [pWordMatch, setPWordMatch] = useState({
    password: '',
    confirm: '',
    var: '',
    msg: '',
  })

  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()
  const githubRef = useRef()

  useEffect(() => {
    if (!passwordRef.current.value) {
      setPWordMatch({
        ...pWordMatch,
        var: '',
        msg: '',
      })
      return
    }
    if (state.password === confirmRef.current.value) {
      setPWordMatch({
        ...pWordMatch,
        var: 'success',
        msg: 'passwords match',
      })
    } else {
      setPWordMatch({
        ...pWordMatch,
        var: 'danger',
        msg: 'passwords do not match',
      })
    }
  }, [pWordMatch.password, pWordMatch.confirm])

  function handleInputChange(event) {
    event.preventDefault()

    setState({
      ...state,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      githubUsername: githubRef.current.value,
    })

    setPWordMatch({
      ...pWordMatch,
      password: passwordRef.current.value,
      confirm: confirmRef.current.value,
    })
  }

  function signUp(event) {
    event.preventDefault()
    if (passwordRef.current.value !== confirmRef.current.value) {
      Toast('error', 'Your passwords must match', 2000)

      return
    }

    if (passwordRef.current.value === '') {
      Toast('error', 'Your password cannot be empty', 2000)

      return
    }

    if (!schema.validate(state.password)) {
      Toast(
        'error',
        'Your password must be at lest 8 characters long, cannot contain spaces, and must include one number ',
      )
      return
    }

    if (!githubRef.current.value) {
      Toast('error', 'You must provide your github account', 2000)
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
        Toast('error', 'That user already exists', 2000)
      })
  }

  return (
    <div>
      <div id="signupWrapper">
        <ToastContainer
          transition={Flip}
          position="top-center"
          autoClose={5000}
          hideProgressBar
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
                  required
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
                <input
                  ref={confirmRef}
                  onChange={handleInputChange}
                  type="password"
                  className="form-control"
                  id="passawordInput2"
                  placeholder="confirm password"
                ></input>
              </div>
              <Badge className="float-right" variant={pWordMatch.var}>
                {pWordMatch.msg}
              </Badge>
              <div className="form-group">
                <label htmlFor="githubUsername">Github username</label>
                <input
                  ref={githubRef}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="githubUsername"
                  placeholder="github username"
                  required
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
