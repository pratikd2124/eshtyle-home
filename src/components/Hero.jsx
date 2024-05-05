import React from 'react'
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// install Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination]);
import Image1 from '../assets/images/ReadyPlayerMe-Avatar (1).png';
import Image3 from '../assets/images/ReadyPlayerMe-Avatar (3).png';
import Image4 from '../assets/images/ReadyPlayerMe-Avatar (4).png';
import Image5 from '../assets/images/ReadyPlayerMe-Avatar (5).png';
import ImageMarquee from './ImageMarquee';
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";




const CoverflowSwiper = () => {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          // When window width is >= 640px (e.g., tablet and desktop)
          640: {
            slidesPerView: 3,
          },
          // When window width is < 640px (e.g., mobile)
          320: {
            slidesPerView: 1,
          }
        }}
  
      loop={true} 
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false  // Continues autoplay after interaction
      }}

        pagination={false}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper  h-screen mt-5 w-full mx-auto "
      >
        <SwiperSlide>
          <img src={Image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} />
        </SwiperSlide>
        
        
      </Swiper>
  );
};


const Hero = () => {
  return (
      <>
       <div className="top-0 h-screen relative  overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
              {/* Background video or animated content */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <ImageMarquee/>
            <div className="absolute inset-0 overflow-hidden z-10">
              {/* You can replace this with your animated or video background */}
              {/* <CoverflowSwiper /> */}
              </div>
              <div className="absolute inset-0 h-[84%] bg-gradient-to-b from-transparent to-black z-10 "></div>
          </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
              <div className="animate__animated animate__fadeInDown relative z-10 absolute inset-x-0 top-64 h-full w-full">

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  Transform Your Style with AI
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                    Explore, try, and shop your favorite styles virtually—no dressing rooms needed!
                    
                </p>
                <div className="relative inline-flex group my-6">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-sm group-hover:blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-pulse"></div>
                  <a href="/tryon">
                    <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    <CursorArrowRaysIcon className="h-6 w-6 mx-2" />
                    Start Your Virtual Try-On Now
                    </button>
                  </a>
                </div>
              </div>
            {/* Add CTA buttons or any other content here */}
          </div>
      </div>
      </>
  )
}

export default Hero;