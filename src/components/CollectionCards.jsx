import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards,Autoplay } from "swiper/modules";


const SwiperCard = () => {
    return (
        <>
        <Swiper
        effect={"cards"}    
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        className="mySwiper w-[250px] "
      >
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 1</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 2</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 3</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 4</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 5</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 6</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 7</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 8</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-600 w-64 h-72 rounded-xl">Slide 9</SwiperSlide>
      </Swiper>
        </>
    )
}
export default function CollectionCards() {
  return (
    <>
          <div className="w-[90%] overflow-hidden mx-auto md:flex justify-between items-center my-16">
              <h1 className="text-white font-bold text-4xl px-32">Collection</h1>
              <SwiperCard/>
      </div>
    </>
  );
}
