import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import dotenv from 'dotenv'
import { StoreContext } from './utils/GlobalState'
// import useAuth from './utils/useAuth'
import API from './utils/API'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'

function App() {
  const [store, dispatch] = useContext(StoreContext)
  dotenv.config()

  useEffect(() => {
    API.getUser().then((user) => {
      // console.log(user.data)
      dispatch({ type: 'set user', payload: user.data })
    })
  }, [])

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
