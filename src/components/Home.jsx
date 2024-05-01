import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

const Home = () => {
  return (
      <>
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <Hero />
              <Footer/>
            </div>
      </>
  )
}

export default Home