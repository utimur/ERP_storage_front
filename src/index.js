import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import DependenciesContainer from './components/DependenciesContainer'
import GlobalTheme from './components/GlobalTheme'

ReactDOM.render(
  <BrowserRouter>
    <DependenciesContainer>
      <GlobalTheme />
      <App />
    </DependenciesContainer>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
