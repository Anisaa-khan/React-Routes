import React from 'react'
import HeroSection from './component/HeroSection'

const About = () => {
  const data={
    name:"Programmer",
    image:"./images/Marwat.jpg",
    
  }
  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default About
