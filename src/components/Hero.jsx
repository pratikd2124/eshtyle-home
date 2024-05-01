import React from 'react'
import 'animate.css';



const Hero = () => {
  return (
      <>
       <section className="top-0 h-screen relative  overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background video or animated content */}
        <div className="absolute inset-0 overflow-hidden">
          {/* You can replace this with your animated or video background */}
          
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Transform Your Style with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Explore, try, and shop your favorite styles virtually—no dressing rooms needed!
        </p>
        {/* Add CTA buttons or any other content here */}
      </div>
    </section>
      </>
  )
}

export default Hero;