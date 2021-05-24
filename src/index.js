import React from 'react'
import { render } from 'react-dom'
import App from 'srcDir/app'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import ErrorApp from 'componentsDir/static/ErrorApp'
import ErrorWrapper from 'componentsDir/static/ErrorCatchWrapper'
// import { Provider } from 'react-redux'
// import store from './redux/store'
import VConsole from 'vconsole'
try {
  const query = new URLSearchParams(window.location.search)
  if (query.has('debug')) {
    const vConsole = new VConsole()
    console.log(vConsole)
  }
} catch (error) {}
render(
  <Router>
    <ErrorWrapper
      component={ErrorApp}
      callback={e => {
        console.log('e', e)
      }}
    >
      <App />
    </ErrorWrapper>
  </Router>,
  document.getElementById('app')
)
