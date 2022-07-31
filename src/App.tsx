import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/about/About';
import About from './components/about/About';
import NavBar from './navbar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about"/>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App