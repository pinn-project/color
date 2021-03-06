import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import store from './store'
// import './utils/defineProperty'
import './assets/style/index.scss'

// Create instance react-app.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
