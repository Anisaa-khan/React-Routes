import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = (props) => {
  return (
    <div className="row">
<div id='section-data' className="col-6">
<h3> This is me</h3>
<h1>{props.name}</h1>
<p>I'm Anisa Khan .A junior Web-Developer with some other extra Skills.I'm Also a Freelancer.</p>
<button className='btn-hireme'><NavLink className="Hire" to="/Contact">Hire Me</NavLink></button>
</div>

<div id='section-img' className="col-6">
  <picture>
    <img src={props.image} alt="" className='Heroimg' />
  </picture>
</div>


    </div>
  )
}

export default HeroSection
