import React from 'react'
import IntoImage from '../assets/images/intro-image.jpg';

const Intro = () => {
  return (
      <>
          <div className="">
              
                <div className="animate__animated animate__fadeIn delay-2000 relative w-full h-screen  mx-auto px-4 mt-24">
                  <div className="absolute max-w-7xl mx-auto top-20 inset-0 z-10">
                      <div className="relative w-full  h-full">
                            <div className="hidden md:block absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-[100px]  group-hover:-inset-1 group-hover:duration-200 "></div>
                                <img src={IntoImage} alt="hero" className="hidden md:block absolute z-20 w-full h-full rounded-xl border-2 border-gray-600 object-conatin object-center" />  
                                <img src={IntoImage} alt="hero" className="block md:hidden absolute z-20 w-fit h-full rounded-xl border-2 border-gray-600  object-cover" />  
                          
                      </div>
                    </div>
                    <div className="absolute inset-0 z-10 " style={{background: 'linear-gradient(to bottom, rgb(0,0,0,0.4), rgb(0,0,0))',}}></div>

              </div>
              <div className='md:h-48 h-12 w-full bg-black  z-20 relative'></div>
          </div>
      </>
  )
}

export default Intro