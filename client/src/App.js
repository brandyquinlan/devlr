import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Settings from './Pages/Settings'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/settings" component={Settings} />
      </Switch>
    </Router>
  )
}

export default App
