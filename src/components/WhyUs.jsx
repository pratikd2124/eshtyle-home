import React, { useState, useEffect } from 'react'

const WhyUs = () => {

    const slides = [
        {
          title: 'Virtual Try-On Experience',
          description: 'Revolutionize the way customers shop by offering a cutting-edge virtual try-on experience. With advanced technology, customers can virtually try on products such as apparel, accessories, or even furniture, providing them with a realistic preview of how the items will look on them before making a purchase. This innovative feature enhances confidence in buying decisions, reduces the need for returns, and ultimately improves customer satisfaction.'
        },
        {
          title: 'Custom AI Generated Images',
          description: 'Set yourself apart by leveraging AI-generated images to showcase your products. These custom images are not only visually appealing but also tailored to meet the specific needs and preferences of your customers. Whether it\'s personalized product recommendations or unique design variations, AI technology enhances the shopping experience by presenting customers with relevant and engaging visuals that resonate with their tastes.'
        },
        {
          title: 'Large Number of Varieties in Design',
          description: 'With a vast selection of designs, styles, and options, we offer something for everyone. Whether customers are looking for classic designs, trendy styles, or unique creations, they\'ll find an extensive range of options to choose from. Our commitment to diversity ensures that customers can express their individuality and find the perfect product that matches their taste and personality.'
        },
        {
          title: 'Exclusive Deals and Offers',
          description: 'Enjoy access to exclusive deals and offers available only to our valued customers. From limited-time promotions to special discounts, we provide opportunities for customers to save money and get more value out of their purchases. Our loyalty programs reward repeat customers, while our newsletter keeps subscribers informed about the latest deals, ensuring that they never miss out on a great offer.'
        }
      ];

      const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

        // Function to handle next slide
        const nextSlide = () => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };

        // Function to handle previous slide
        const prevSlide = () => {
            setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        };

        useEffect(() => {
            // Automatically change slide after 2 seconds
            const intervalId = setInterval(nextSlide, 3000);

            // Cleanup the interval when component unmounts or when slide changes
            return () => clearInterval(intervalId);
        }, [currentSlideIndex]); // Only run the effect when the currentSlideIndex changes


  return (
    <>
    <div className='max-w-7xl mx-auto min-h-screen'>
        <div className='hidden lg:block relative  h-80'>
            <div className='absolute z-20 top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-900 rounded-full w-[14rem] h-[14rem]'>
                <div className='relative w-full h-full'>
                    <h1 className='absolute z-20 top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-center'>Why Choose Us</h1>
                </div>
            </div>
            
            <div className='absolute z-10 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full w-[30rem] h-[30rem]'>
                <div className='relative w-full h-full'>
                    <h1 className='absolute z-20 top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-black text-4xl text-center'>{slides[currentSlideIndex].title}</h1>
                </div>
            </div>
            <div className='absolute z-10 top-1/2 -right-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg w-[40rem] h-[30rem]'>
                <div className='relative w-full h-full'>
                    <h1 className=' absolute w-[30rem] z-20 top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-black'>
                        {slides[currentSlideIndex].description}
                    </h1>
                </div>
            </div>

        </div>

        <div className='flex flex-col gap-6 justify-center items-center lg:hidden'>
            <div className='bg-gradient-to-r from-purple-500 to-purple-900 rounded-full w-[14rem] h-[14rem]'>
                <div className='relative w-full h-full'>
                    <h1 className='absolute z-20 top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-center'>Why Choose Us</h1>
                </div>
            </div>

            <div className=' bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg w-[90%] h-[15rem]'>
                <div className='relative w-full h-full'>
                    <h1 className='absolute z-20 top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-black text-4xl text-center'>{slides[currentSlideIndex].title}</h1>
                </div>
            </div>

            <div className=' bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg w-full h-[30rem]'>
                <div className='relative w-full h-full'>
                    <h1 className=' absolute w-[30rem] z-20 top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-black'>
                        {slides[currentSlideIndex].description}
                    </h1>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WhyUs