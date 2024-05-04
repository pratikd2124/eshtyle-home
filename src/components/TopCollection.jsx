import React,{useState,useEffect} from 'react'
import Tshirt from '../assets/images/tshirt.png'

const TopCollection = () => {

    const artists = React.useMemo(() => [
        {
          name: 'Raven Simmons',
          handler: '@raven',
          image: 'https://dashboard.eshtyle.com/media/prelaunch-products/98719_W2hJ9K9.jpg',
        },
        {
          name: 'Uriah Gardner',
          handler: '@uriah',
          image: 'https://images-workbench.99static.com/W8S6YYtGLXjNRpm_UMGVAigMXnA=/99designs-contests-attachments/34/34196/attachment_34196195',
        },
        {
          name: 'Colin Mitchell',
          handler: '@colin',
          image: 'https://img.freepik.com/premium-photo/abstract-3d-surface-background-creative-digital-painting-abstract-background_743855-1288.jpg',
        },
        {
          name: 'Emely Hall',
          handler: '@emely',
          image: 'https://static.vecteezy.com/system/resources/previews/023/604/160/non_2x/beautiful-cat-portrait-digital-art-painting-3d-rendering-ai-generative-image-free-photo.jpg',
        },
        {
          name: 'Raphael Scott',
          handler: '@raphael',
          image: 'https://img.freepik.com/premium-psd/3d-illustration-astronaut-reading-book_930095-114.jpg',
        },
    ], []);

    const [currentArtistIndex, setCurrentArtistIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentArtistIndex((prevIndex) =>
                prevIndex === artists.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [artists]);
    const [loading, setLoading] = useState(true);

  return (
      <>
        <div className="w-[90%] flex justify-center items-center my-16">
          <h1 className="text-white font-bold text-4xl ">
            Limited Edition Collection
          </h1>
        </div>
    <div className='flex flex-col md:flex-row justify-center items-center mx-auto w-4/5 gap-6'>

    
        <div className='md:w-2/3 w-full   p-3'>
                    <div
                        id='banner'
                        className='relative bg-no-repeat bg-center bg-cover h-[80vh] rounded-xl border-2 border-blue-700'
                        style={{}}
                    >
            
                  <img src={Tshirt} alt='tshirt' className='z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-auto '/>  
                    <img src={artists[currentArtistIndex].image} alt={artists[currentArtistIndex].name} className='z-20 absolute top-[42%] left-[50%] rounded-md transform -translate-x-1/2 -translate-y-1/2 w-48 opacity-80'/>
                      <div className='rounded-xl absolute inset-0 bg-black opacity-30 z-40'></div>
                        <div className='z-40 absolute bottom-10 p-4 text-white space-y-4 mx-6'>
                            <h3 className='font-semibold text-2xl'>{artists[currentArtistIndex].name}</h3>
                          <p className='text-sm'>{artists[currentArtistIndex].handler}</p>
                          <button className='p-2 px-3 rounded-lg bg-white text-black hover:bg-gray-200'>View Product</button>
                        </div>
                    </div>
            </div>
         <div className='md:w-1/3 w-full h-auto  space-y-5 p-3'>
         {artists.map(({ name, handler, image }) => (
                        <li
                            className="bg-violet-900/30 backdrop-blur rounded-xl p-4 flex shadow-lg cursor-pointer hover:scale-105 transition ease-in-out duration-300" 
                            key={handler}
                            
                        >
                            <img
                            src={image}
                            className="w-16 h-16 rounded-md"
                            alt={`top artist ${name}`}
                            />
                            <div className="ml-3">
                            <h3 className="font-semibold">{name}</h3>
                            <p className="text-sm ">{handler}</p>
                            </div>
                        </li>
                        ))}
         </div>
              
    </div>
    </>
  )
}

  

export default TopCollection