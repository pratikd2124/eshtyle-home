import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Intro from './Intro'

const Home = () => {
  return (
      <>
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <Hero />
              <Intro/>
              <Footer/>
            </div>
      </>
  )
}

export default Home