import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Intro from './Intro'
import TopCollection from './TopCollection'
import CollectionCards from './CollectionCards'
import FeaturedCollection from './FeaturedCollection'
import TryOnSample from './TryOnSample'
import WhyUs from './WhyUs'

const Home = () => {
  return (
      <>
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <Hero />
              <WhyUs/>
              <Intro />

              <CollectionCards  />
              <FeaturedCollection/>

              <Footer />
        
            </div>
      </>
  )
}

export default Home