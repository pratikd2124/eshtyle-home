import React from 'react'

const Footer = () => {
  return (
      <>
      <footer>
  <div className="mx-auto w-full  border-t border-gray-800 xl:pb-2">
    <div className="md:flex md:justify-between px-16 p-4 py-16 sm:pb-16 gap-4">
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
          <h2 className="mb-6 text-sm tracking-tighter font-medium  uppercase dark:text-white">Product</h2>
          <ul className="gap-2 grid">
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/">Email Collection</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/pricing">Pricing</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/faq">FAQ</a></li>
          </ul>
        </div>
        {/* Community Links */}
        <div>
          <h2 className="mb-6 text-sm tracking-tighter font-medium  uppercase dark:text-white">Community</h2>
          <ul className="gap-2 grid">
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/">Discord</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/">Twitter</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="mailto:hello@chatcollect.com">Email</a></li>
          </ul>
        </div>
        {/* Legal Links */}
        <div>
          <h2 className="mb-6 text-sm tracking-tighter font-medium  uppercase dark:text-white">Legal</h2>
          <ul className="gap-2 grid">
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/terms">Terms</a></li>
            <li><a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/privacy">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* Bottom Section */}
    </div>
    </footer>          
      </>
  )
}

export default Footer