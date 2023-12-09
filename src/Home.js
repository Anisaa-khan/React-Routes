import React from 'react'
import HeroSection from './component/HeroSection'

const Home = () => {
  const data={
    name:"Anisa Khan",
    image:"./images/Anisa.jpg",
  }
  return (
    <HeroSection {...data}/>
  )
}

export default Home
