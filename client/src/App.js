import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Store from './utils/GlobalState'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <Router>
      <Store>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home">
              {code ? <Home /> : <Signup />}
            </Route>
          </Switch>
        </div>
      </Store>
    </Router>
  )
}

export default App
