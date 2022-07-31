import React from 'react'
import {NavLink} from "react-router-dom";

const NavBar = () => {

    const navElements = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About",
            url: "/about"
        },
    ]
  return (
    <header>
        <div className="navbar">
            <nav>
                {
                    navElements.map((element) => {
                        return <NavLink to={element.url} >{element.title}</NavLink>
                    })
                }
            </nav>
        </div>
    </header>
  )
}

export default NavBar