import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Intro from './Intro'
import TopCollection from './TopCollection'
import CollectionCards from './CollectionCards'

const Home = () => {
  return (
      <>
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <Hero />
              <Intro />

              <div className='text-sm max-w-4xl mx-auto my-16'>Not completed </div>
        <TopCollection />
        <CollectionCards  />
              <Footer />
        
            </div>
      </>
  )
}

export default Home