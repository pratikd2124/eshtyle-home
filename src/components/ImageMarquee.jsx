import React, { useState, useRef, useEffect } from 'react'
import Image1 from '../assets/images/icons/brand.png';
import Image2 from '../assets/images/icons/clean-clothes.png';
import Image3 from '../assets/images/icons/dress.png';
import Image4 from '../assets/images/icons/dress1.png';
import Image5 from '../assets/images/icons/hawaiian-shirt.png';
import Image6 from '../assets/images/icons/hawaiian-shirt.png';
import Image7 from '../assets/images/icons/jacket (1).png';
import Image8 from '../assets/images/icons/jacket2.png';
import Image9 from '../assets/images/icons/suit.png';
import Image10 from '../assets/images/icons/woman-clothes.png';


const randomColor = () => {
    // Generates a random hex color
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    return `#${hex.toString(16)}`;
}


const Marquee = ({ speed , direction }) => {
    const marqueeRef = useRef(null);

    const animationName = direction === 'right' ? 'marqueeRight' : 'marqueeLeft';

  
   




    

    return (
      <div ref={marqueeRef} className="overflow-hidden whitespace-nowrap my-8">
        <div  className='space-x-32' style={{
                display: 'flex ',
                animation: `${animationName} ${speed}s linear infinite`,
            }}>
            <img src={Image1} alt={`Slide 1`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
            <img  src={Image2} alt={`Slide 2`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
                
            <img  src={Image3} alt={`Slide 3`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image4} alt={`Slide 4`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
            <img  src={Image5} alt={`Slide 5`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
                
            <img  src={Image6} alt={`Slide 6`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
            <img  src={Image7} alt={`Slide 7`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image8} alt={`Slide 8`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image9} alt={`Slide 9`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image10} alt={`Slide 10`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

         
            <img src={Image1} alt={`Slide 1`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
            <img  src={Image2} alt={`Slide 2`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
                
            <img  src={Image3} alt={`Slide 3`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image4} alt={`Slide 4`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
            <img  src={Image5} alt={`Slide 5`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
                
            <img  src={Image6} alt={`Slide 6`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
            <img  src={Image7} alt={`Slide 7`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image8} alt={`Slide 8`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image9} alt={`Slide 9`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />

            <img  src={Image10} alt={`Slide 10`} className="inline-block w-20 h-20 object-cover p-3  rounded-xl" style={{
                         border: `3px solid ${randomColor()}`,
                         boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Glowing effect
                         filter: 'drop-shadow(0 0 6px currentColor)' // Use currentColor for the glow color
                     }} />
        </div>
      </div>
    );
  };

const ImageMarquee = () => {
    


  return (
      <div className="mt-8">
          <Marquee  speed={20} direction="right" />
          <Marquee speed={38} direction="left" />
          <Marquee speed={38} direction="right" />
          <Marquee speed={20} direction="left" />
          <Marquee speed={38} direction="right" />
          
    </div>
  )
}

export default ImageMarquee