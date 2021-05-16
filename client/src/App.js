import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserStore from './utils/UserState'
import ModalStore from './utils/ModalState'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Settings from './Pages/Settings'
import Profile from './Pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'
import Footer from './Components/Footer'

function App() {
  return (
    <UserStore>
      <ModalStore>
        <Router>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/settings" component={Settings} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
        <Footer />
      </ModalStore>
    </UserStore>
  )
}

export default App
