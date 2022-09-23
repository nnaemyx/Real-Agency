import React from 'react'
import Hero from '../components/Hero'
import Models from '../components/Models'
import Navbar from '../components/Navbar.'
import Real from '../components/Real'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Models />
      <Real/>
    </div>
  )
}

export default Home