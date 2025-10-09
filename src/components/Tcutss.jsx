import React from 'react'
import tcutss from '../assets/tcutss.assets.png'

export default function Tcutss() {
    return (
        <div className='h-150 w-full flex flex-row    items-center justify-center'>
            <div className='h-full w-3/5 flex flex-col items-center justify-center p-10'>
              <img src={tcutss} alt='tcutss' className='w-full h-full object-contain rounded-md' />
            </div>
            <div className='h-full w-2/5 flex flex-col items-start justify-center p-10 gap-4'>
              <p className='text-5xl font-vollkorn text-black mb-2'>
                Tcutss
              </p>
              <p className='text-md text-gray-700 text-left font-work-sans  mb-4 '>
                A full-stack web app built with React, Node.js, Express, and PostgreSQL for seamless appointment scheduling. Features secure authentication, real-time updates, and automated email confirmations. Deployed via Railway and Cloudflare, optimized for performance and scalability.
              </p> 
              <a
                href="https://tcutss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-yellow-400 border border-transparent font-semibold font-work-sans rounded-full px-6 py-3 hover:bg-yellow-400 hover:text-black hover:border-black transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
              >
                LIVE SITE
              </a>


            </div>
          </div>
    )
}