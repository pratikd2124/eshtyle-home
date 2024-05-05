import React from 'react'
import Image1 from '../assets/images/character1.png';
import Image2 from '../assets/images/character2.png';
import Image3 from '../assets/images/character3.png';
import Image4 from '../assets/images/sample-character.png';
import Arrow from  '../assets/images/arrow-icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CoverflowSwiper = () => {
    return (
      <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            // When window width is >= 640px (e.g., tablet and desktop)
            640: {
              slidesPerView: 1,
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
          className="mySwiper h-screen mt-5 w-full mx-auto border"
        >
          <SwiperSlide>
            <img src={Image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} />
          </SwiperSlide>
          
          
          
        </Swiper>
    );
  };
const TryOnSample = () => {
  return (
    <>
        <div className='h-screen'>
            <div className='flex gap-2'>
                <CoverflowSwiper/>
                <img src={Arrow} className='h-8 w-8'/>
                <img src={Image4} className=''/>
            </div>
        </div>
    </>
  )
}

export default TryOnSample