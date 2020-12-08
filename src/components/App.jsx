import '../App.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import AppRouter from './AppRouter'

// ДЛЯ ГРАФИКИ ЮЗАЕМ MATERIAL UI REACT

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
