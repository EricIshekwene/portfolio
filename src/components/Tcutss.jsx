import React from 'react'
import tcutss from '../assets/tcutss.assets.png'

export default function Tcutss({ darkMode }) {
  return (
    <div id='projects' className='h-150 w-full flex flex-row    items-center justify-center'>
      <div className='h-full w-3/5 flex flex-col items-center justify-center p-10'>
        <img src={tcutss} alt='tcutss' className={`w-full h-full object-contain rounded-md `} />
      </div>
      <div className='h-full w-2/5 flex flex-col items-start justify-center p-10 gap-4'>
        <p className={`text-5xl font-vollkorn text-black mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
          Tcutss
        </p>
        <p className={`text-md text-gray-700 text-left font-work-sans  mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
          A full-stack web app built with React, Node.js, Express, and PostgreSQL for seamless appointment scheduling. Features secure authentication, real-time updates, and automated email confirmations. Deployed via Railway and Cloudflare, optimized for performance and scalability.
        </p>
        <a href="https://tcutss.com" target="_blank" rel="noopener noreferrer" className={` flex items-center justify-center font-vollkorn font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${darkMode ? 'text-black bg-white hover:bg-black hover:text-yellow-400' : 'text-white bg-black hover:bg-[#3B82F6]'}`}
        >
          LIVE SITE
        </a>



      </div>
    </div>
  )
}