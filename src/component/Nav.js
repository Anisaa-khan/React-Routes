import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
  <nav>
    <div className="menu-icon">
        <ul className="nav-list">
            <li><NavLink className="navlink" to="/">Home</NavLink></li>
            <li><NavLink className="navlink" to="/About">About</NavLink></li>
            <li><NavLink className="navlink" to="/Contact">Contact</NavLink></li>
            <li><NavLink className="navlink" to="/Service">Service</NavLink></li>
        </ul>
    </div>
  </nav>
  )
}

export default Nav
