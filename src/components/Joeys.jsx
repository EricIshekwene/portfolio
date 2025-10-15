import React, { useState, useEffect } from 'react'
import joey from '../assets/joey.png'

export default function Joeys({ darkMode }) {
  const isLarge = useIsLarge()
  function useIsLarge() {
    const [isLarge, setIsLarge] = useState(window.innerWidth > 800)
    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth > 800)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
    return isLarge
  }

  return (
    <>
      {isLarge ? (
        <div id='projects' className='h-150 w-full flex flex-row items-center justify-center'>
          <div className='h-full w-3/5 flex flex-col items-center justify-center p-10'>
            <img src={joey} alt='joey' className='w-full h-full object-contain rounded-md' />
          </div>

          <div className='h-full w-2/5 flex flex-col items-start justify-center p-10 gap-4'>
            <p className={`text-5xl font-vollkorn mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              Joey's Place
            </p>
            <p className={`text-md text-gray-700 text-left font-work-sans mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
              A responsive static website built for Joey’s Place, a local bar and restaurant. Designed a clean, modern interface with sections for events, menus, and contact info. Used React, Vite, and Tailwind CSS to create a fast, mobile-friendly experience, deployed through Cloudflare with a custom domain.
            </p>
            <a
              href="https://joey-place.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center font-vollkorn font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${darkMode ? 'text-black bg-white hover:bg-[#4b0e1e] hover:text-white' : 'text-white bg-[#4b0e1e] hover:bg-[#3B82F6]'}`}
            >
              LIVE SITE
            </a>
          </div>
        </div>
      ) : (
        <div id='projects' className='w-full flex flex-col items-center justify-center'>
          <div className='h-full w-full flex flex-col items-center justify-center p-2'>
            <img src={joey} alt='joey' className='w-full h-full object-contain rounded-md' />
          </div>

          <div className='h-full w-full flex flex-col items-start justify-center p-10 gap-4'>
            <p className={`text-3xl font-vollkorn mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              Joey's Place
            </p>
            <p className={`text-sm text-gray-700 text-left font-work-sans mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
              A responsive static website built for Joey’s Place, a local bar and restaurant. Designed a clean, modern interface with sections for events, menus, and contact info. Used React, Vite, and Tailwind CSS to create a fast, mobile-friendly experience, deployed through Cloudflare with a custom domain.
            </p>
            <a
              href="https://joey-place.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center font-vollkorn font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${darkMode ? 'text-black bg-white hover:bg-[#4b0e1e] hover:text-white' : 'text-white bg-[#4b0e1e] hover:bg-[#3B82F6]'}`}
            >
              LIVE SITE
            </a>
          </div>
        </div>
      )}
    </>
  )
}
