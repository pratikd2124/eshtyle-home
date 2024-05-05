import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Link } from "react-router-dom";


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
        perSlideOffset="120"
        perSlideRotate="20"
        className="mySwiper py-4 w-[400px]"
      >
        <SwiperSlide className="flex items-center justify-center bg-gray-900  h-[500px] rounded-xl">
          <Link to="limited-edition/:id">
            <img src="https://eshtyle.vercel.app/api/media/prelaunch-design/z5z9cdYZTleu8nG6CAfzVQ.png" className="w-full h-full object-cover"/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-900 h-[500px] rounded-xl">
          <Link to="limited-edition/:id">

          <img src="https://eshtyle.vercel.app/api/media/prelaunch-design/kuqB9HvFQaGfr3No11ljrQ-removebg-preview.png" className="w-full h-full object-cover"/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-900 h-[500px] rounded-xl">
        <Link to="limited-edition/:id">

            <img src="https://eshtyle.vercel.app/api/media/prelaunch-design/WBEgnFLXS9Gz2cgM5t1IVQ.png" className="w-full h-full object-cover"/>
        </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-900 h-[500px] rounded-xl">
        <Link to="limited-edition/:id">

          <img src="https://eshtyle.vercel.app/api/media/prelaunch-design/ah8snXJWRZeN9-d6JH7Y6Q-removebg-preview_1.png" className="w-full h-full object-cover"/>
        </Link>
          
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-900 h-[500px] rounded-xl">
        <Link to="limited-edition/:id">

          <img src="https://eshtyle.vercel.app/api/media/prelaunch-design/deadpool-wolverine-poster1.jpeg" className="w-full h-full object-cover"/>
        </Link>
          
        </SwiperSlide>
       
      </Swiper>
      {/*  */}
        </>
    )
}

const Counter = () => {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + (6 * 24 * 60 * 60 * 1000)); // 6 days later

  const calculateTimeLeft = () => {
    const differenceInTime = endDate.getTime() - new Date().getTime();
    const daysLeft = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((differenceInTime % (1000 * 60)) / 1000);

    return {
      daysLeft,
      hoursLeft,
      minutesLeft,
      secondsLeft
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      {timeLeft.daysLeft > 0 && (
        <p>
          Offer Valid Only for {timeLeft.daysLeft} days : {timeLeft.hoursLeft} hour : {timeLeft.minutesLeft} minutes : {timeLeft.secondsLeft} seconds left
        </p>
      )}
      {timeLeft.daysLeft <= 0 && (
        <p>Expired</p>
      )}
    </div>
  );
};




export default function CollectionCards() {
  return (
    <>
          <div className="w-[90%] overflow-hidden mx-auto md:flex justify-between items-center my-16 border border-gray-700 rounded-3xl">
              <div className=" md:px-32 p-3">
                  <h1 className="text-white font-bold text-4xl ">Exclusive Limited Edition Designs</h1>
                  <p className="text-xl py-2 font-bold bg-gradient-to-r from-rose-500 to-teal-600 bg-clip-text text-transparent">Grab your favorites now! Up to 40% off new styles.</p>
                  <Counter/>
              </div>
              <SwiperCard/>
      </div>
    </>
  );
}
