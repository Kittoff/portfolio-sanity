import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

const App = () => {
  const routes = [
    {
      component: Home,
      path: '/'
    },
    {
      component: About,
      path: '/about'
    }
  ]
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      {
        routes.map((element) => {
          return <Route path={element.path}  element={<element.component/> }/>
        })
      }
    
    </Routes>
    </BrowserRouter>
  )
}

export default App