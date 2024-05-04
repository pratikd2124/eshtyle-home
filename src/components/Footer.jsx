import React from 'react'

const Footer = () => {
  return (
      <>
      <footer>
  <div className="mx-auto w-full  border-t border-gray-800 xl:pb-2">
    <div className="md:flex md:justify-between px-16 p-4 pt-16 pb-8 sm:pb-16 gap-4">
      <div className="mb-12 flex-col flex justify-center gap-4">
        <a className="flex items-center gap-2" href="/">
          <img src="https://eshtyle.com/logo.png" draggable={false} className="h-20 w-20 text-primary" alt="Eshtyle Logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eshtyle</span>
        </a>
        <p className="max-w-xs">The next generation Fashion</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
              {/* Product Links */}
        <div>
          <h2 className="mb-6 text-sm tracking-tighter font-medium  uppercase dark:text-white">About</h2>
          <ul className="gap-2 grid">
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/about-us">Company </a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/blogs">Blogs</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm tracking-tighter font-medium  uppercase dark:text-white">Product</h2>
          <ul className="gap-2 grid">
                  <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/limied-edition">Limited Edition </a></li>
                  <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/v-tryon">Virtual Try On </a></li>
                  <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/pricing">Pricing</a></li>
          </ul>
        </div>
       
        {/* Legal Links */}
        <div>
          <h2 className="mb-6 text-sm tracking-tighter font-medium  uppercase dark:text-white">Legal</h2>
          <ul className="gap-2 grid">
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/terms">Terms</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/privacy">Privacy</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/returns">Refund Policy</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/faq">FAQ</a></li>
                  
          </ul>
        </div>
      </div>
    </div>
          {/* Bottom Section */}
          <div className="flex justify-between items-center px-16 py-4">
            <div className="flex items-center gap-2">
              <a href='' target="_blank" className="">
              <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-500 hover:text-white w-8 h-8' strokeWidth="1" fill="currentColor" viewBox="0 0 48 48" ><path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"/></svg>
              </a>
              <a href='' target="_blank" className="">
                
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className='text-gray-500 hover:text-white w-8 h-8' strokeWidth="1.5" fill="currentColor"><path d="M 8 3 C 5.2447116 3 3 5.2447116 3 8 L 3 16 C 3 18.755288 5.2447116 21 8 21 L 16 21 C 18.755288 21 21 18.755288 21 16 L 21 8 C 21 5.2447116 18.755288 3 16 3 L 8 3 z M 8 4 L 16 4 C 18.214712 4 20 5.7852884 20 8 L 20 16 C 20 18.214712 18.214712 20 16 20 L 8 20 C 5.7852884 20 4 18.214712 4 16 L 4 8 C 4 5.7852884 5.7852884 4 8 4 z M 17.5 6 A 0.5 0.5 0 0 0 17.5 7 A 0.5 0.5 0 0 0 17.5 6 z M 12 7 C 10.375001 7 9.0935892 7.6273777 8.2519531 8.5742188 C 7.4103171 9.5210596 7 10.763889 7 12 C 7 13.236111 7.4103171 14.47894 8.2519531 15.425781 C 9.0935892 16.372622 10.375001 17 12 17 C 13.624999 17 14.906411 16.372622 15.748047 15.425781 C 16.589683 14.47894 17 13.236111 17 12 C 17 10.763889 16.589683 9.5210597 15.748047 8.5742188 C 14.906411 7.6273777 13.624999 7 12 7 z M 12 8 C 13.374999 8 14.34359 8.4976223 15.001953 9.2382812 C 15.660316 9.9789404 16 10.986111 16 12 C 16 13.013889 15.660316 14.02106 15.001953 14.761719 C 14.34359 15.502378 13.374999 16 12 16 C 10.625001 16 9.6564102 15.502378 8.9980469 14.761719 C 8.3396836 14.02106 8 13.013889 8 12 C 8 10.986111 8.3396836 9.9789403 8.9980469 9.2382812 C 9.6564102 8.4976223 10.625001 8 12 8 z"/></svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">Copyright © 2024 Eshtyle. All Rights Reserved.</p>
          </div>
    </div>
    </footer>          
      </>
  )
}

export default Footer