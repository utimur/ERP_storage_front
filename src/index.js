import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import GlobalTheme from './components/GlobalTheme'
import { GlobalDependenciesContainer } from './containers'

ReactDOM.render(
  <BrowserRouter>
    <GlobalDependenciesContainer>
      <GlobalTheme />
      <App />
    </GlobalDependenciesContainer>
  </BrowserRouter>,
  document.getElementById('root')
)
