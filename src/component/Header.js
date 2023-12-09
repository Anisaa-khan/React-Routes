import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <>
    <header>
    <NavLink className="logo" to="/">
<b> PortFolio </b>
</NavLink>
<Nav/>

    </header>
 
    </>

  )
}

export default Header
