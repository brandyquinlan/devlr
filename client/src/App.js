import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StoreContext } from './utils/GlobalState'
import API from './utils/API'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'

function App() {
  const [store, dispatch] = useContext(StoreContext)

  // this is doing nothing
  useEffect(() => {
    API.getUser().then((user) => {
      dispatch({ type: 'set user', payload: user.data })
      console.log(store)
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
