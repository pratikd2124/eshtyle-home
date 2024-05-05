import React, { useState, useEffect } from 'react';

const FeaturedCollection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    {
      id: 'imgID1',
      src: 'https://dashboard.eshtyle.com/media/prelaunch-products/98719_W2hJ9K9.jpg',
      productName: 'Tshirt-Whistle Podu Army'
    },
    {
      id: 'imgID2',
      src: 'https://eshtyle.vercel.app/api/media/prelaunch-products/8d81a6a4-e8c1-4f5a-b4c6-8d3dd3526b08_PaGoaPK.png',
      productName: 'Bomber Jacket-Classic Black'
    },
    {
    id: 'imgID3',
    src: 'https://eshtyle.vercel.app/api/media/prelaunch-products/9b790ac1-2276-4d4c-8cb7-931a8e5a0eb7_NkXfHIP.png',
    productName: 'Tshirt Jacket-Classic Black'
  },
    // Add more images and product names as needed
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleViewProduct = () => {
    const currentImage = images[currentIndex];
    window.location.href = `limited-edition/${currentImage.id}`;
  };


  return (
    <>
    <div className='max-w-7xl mx-auto grid lg:grid-cols-2 grid-col-1 gap-2 items-center my-16 '>
            <div className='relative'>
                <div className="hidden md:block absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-[60px]  group-hover:-inset-1 group-hover:duration-200 "></div>
                <div className='relative border-2 border-gray-600 rounded-xl'>
                    

                    <img src={images[currentIndex].src} className='rounded-xl object-cover' />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black z-10 "></div>
                    <div className='z-20 absolute bottom-10 p-4 text-white space-y-4 mx-6'>
                    <button className='p-2 px-3 rounded-lg bg-white text-black hover:bg-gray-200' onClick={handleViewProduct}>View Product</button>
                    </div>
                </div>
            
            </div>
            <div className=' p-12'>
                <div className='pb-8'>
                <h2 className="text-white font-bold text-4xl ">Explore Our Featured Collection</h2>
                <p className="text-lg text-gray-600">
                    Elevate your wardrobe with our curated collection featuring trendy essentials like bomber jackets, oversized tees, stylish t-shirts, and cozy hoodies. Find your perfect statement pieces to express your unique style effortlessly.
                </p>
                </div>
                <hr className='border border-gray-700' />
                <div className='py-8'>
                <h1 className='animate__animated animate__fadeInRight text-6xl font-bold py-2'>{images[currentIndex].productName}</h1>
                <p className='text-gray-400'>Available in All sizes</p>
                </div>
            </div>
    </div>
    </>
  )
}

export default FeaturedCollection