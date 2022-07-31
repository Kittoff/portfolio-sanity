import React from 'react'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
        <div className="navbar">
            <nav>
                <NavLink to={"/"} >
                    Home
                </NavLink>
                <NavLink to={"/about"}>
                    About
                </NavLink>
            </nav>
        </div>
    </header>
  )
}

export default NavBar