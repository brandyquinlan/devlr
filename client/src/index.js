import React from 'react'
import ReactDOM from 'react-dom'
import Store from './utils/GlobalState'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root'),
)
