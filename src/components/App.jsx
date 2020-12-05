import '../App.css';

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar";
import AppRouter from "./AppRouter";

// ДЛЯ ГРАФИКИ ЮЗАЕМ MATERIAL UI REACT

const App = () => {
  return (
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
      </BrowserRouter>
  );
};

export default App;
