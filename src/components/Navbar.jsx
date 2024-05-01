import React, { useState, useRef, useEffect } from 'react';
import 'animate.css';
import '../assets/css/login.css'

const Navbar = () => {
    const [isDropdownOpenDesktop, setIsDropdownOpenDesktop] = useState(false);
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
  const [isDropdownOpenProfile, setIsDropdownOpenProfile] = useState(false);
    
  const dropdownRefDesktop = useRef(null);
  const dropdownRefMobile = useRef(null);
  const ProfileRef = useRef(null);


  const toggleDropdownDesktop = () => {
    setIsDropdownOpenDesktop(!isDropdownOpenDesktop);
  };

  const toggleDropdownMobile = () => {
    setIsDropdownOpenMobile(!isDropdownOpenMobile);
  };
  const toggleDropdownProfile = () => {
    setIsDropdownOpenProfile(!isDropdownOpenProfile);
    };
    
  const handleClickOutside = (event) => {
    if (dropdownRefDesktop.current && !dropdownRefDesktop.current.contains(event.target)) {
      setIsDropdownOpenDesktop(false);
    }
    if (dropdownRefMobile.current && !dropdownRefMobile.current.contains(event.target)) {
      setIsDropdownOpenMobile(false);
    }
    if (ProfileRef.current && !ProfileRef.current.contains(event.target)) {
        setIsDropdownOpenProfile(false);
      }  
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
      <>
        <nav className="bg-gray-500/10 backdrop-blur-lg border-b border-gray-800 py-4 sticky top-0 z-50">
        <div className="w-[90%] mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-xl">
              Logo
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white  hover:text-gray-400 transition duration-300">
              Products
            </a>
            <a href="#" className="text-white  hover:text-gray-400 transition duration-300">
              About
            </a>
            <a href="#" className="text-white  hover:text-gray-400 transition duration-300">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              Contact
            </a>
            <button className="login-button">
                <div className="login-button-overlay"></div>
                <span>
                    
                    Login 

                </span>
                </button>

            <div className="relative inline-block text-left ml-4 " ref={dropdownRefDesktop}>
              <button onClick={toggleDropdownDesktop} className="text-white hover:text-gray-400 transition duration-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
              </button>
              {isDropdownOpenDesktop && (
                <div className="animate__animated animate__fadeIn origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Blog
                    </a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Login
                    </a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Virtual
                    </a>
                  </div>
                </div>
              )}
            </div>

        <div className="relative inline-block text-left ml-4" ref={ProfileRef}>
              <button onClick={toggleDropdownProfile} className="text-white hover:text-gray-400 transition duration-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              </button>
              {isDropdownOpenProfile && (
                <div className="animate__animated animate__fadeIn origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Account
                    </a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Orders
                    </a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Subscription
                    </a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700" role="menuitem">
                      Virtual
                    </a>
                  </div>
                </div>
              )}
            </div>    
          </div>
          <div className="md:hidden ">
            <button onClick={toggleDropdownMobile} className="text-white focus:outline-none focus:text-white" ref={dropdownRefMobile} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </button>
          </div>
        </div>
        {isDropdownOpenMobile && (
          <div className="md:hidden animate__animated animate__fadeIn ">
            <a href="#" className="block text-white py-2 px-4">
              Home
            </a>
            <a href="#" className="block text-white py-2 px-4">
              About
            </a>
            <a href="#" className="block text-white py-2 px-4">
              Services
            </a>
            <a href="#" className="block text-white py-2 px-4">
              Contact
            </a>
          </div>
        )}
      </nav>
      </>
  )
}

export default Navbar