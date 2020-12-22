import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from "styled-components"
import NavBar from './NavBar'
import AppRouter from './AppRouter'
import GlobalTheme from "./GlobalTheme"

// ДЛЯ ГРАФИКИ ЮЗАЕМ MATERIAL UI REACT

const App = () => (
    <>
        <BrowserRouter>
            <GlobalTheme />
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    </>
)

export default styled(App)`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    background: #fefefe;
`
