import React, { useState, useRef, useContext } from 'react'
import { ToastContainer, Flip } from 'react-toastify'
import { UserContext } from '../utils/UserState'
import ForgotPasswordModal from '../Components/Modals/ForgotPassword'
import API from '../utils/API'
import 'react-toastify/dist/ReactToastify.css'
import Toast from '../utils/Toast'
import Footer from '../Components/Footer'

function Login() {
  const [store, dispatch] = useContext(UserContext)
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  function handleInputChange(event) {
    event.preventDefault()

    setUserInfo({
      ...userInfo,
      email: emailRef.current.value.toLowerCase(),
      password: passwordRef.current.value,
    })
  }

  function login(event) {
    event.preventDefault()

    API.login(userInfo)
      .then(() => {
        window.location.href = '/home'
      })
      .catch(() => {
        Toast('error', 'Incorrect email or password', 2000)
      })
  }

  return (
    <>
      <div id="logIn" className="entryWrapper">
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
                  placeholder="email"
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
                  placeholder="password"
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-secondary gradient float-right"
              >
                Login
              </button>
            </form>

            <br />
            <h6 style={{ fontWeight: '100' }}>
              Or sign up{' '}
              <a href="/" className="switchLink">
                <span style={{ fontWeight: '400' }}>here</span>
              </a>
            </h6>
            <button type="button" onClick={() => setForgotPasswordModal(true)}>
              Forgot Your Password?
            </button>
            <ForgotPasswordModal
              show={forgotPasswordModal}
              onHide={() => setForgotPasswordModal(false)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
