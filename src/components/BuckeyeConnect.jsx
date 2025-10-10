import React from 'react'
import buckeyeConnect from '../assets/buckeye_connect.png'

export default function BuckeyeConnect({ darkMode }) {
    return (
        <div className='h-150 w-full flex flex-row   items-center justify-center'>
            <div className='h-full w-3/5 flex flex-col gap-4 items-start justify-center pl-20 p-10'>
                <p className={`text-5xl font-vollkorn text-black mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Buckeye Connect
                </p>
                <p className={`text-md text-gray-700 text-left font-work-sans  mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                    A full-stack web app built for Ohio State students to create and share personalized link profiles. Features secure authentication with Passport.js, Cloudinary-powered profile image uploads, and dynamic link management (add, edit, delete). Includes a password reset system with email verification and token-based security. Fully deployed on Render with a PostgreSQL backend, managing both frontend EJS templates and backend server logic.</p>
                <a
                    href="https://github.com/EricIshekwene/Buckeye-Connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` flex items-center justify-center font-vollkorn font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${darkMode ? 'text-black bg-white hover:bg-[#BB0000] hover:text-white' : 'text-white bg-[#BB0000] hover:bg-[#3B82F6]'}`}
                >
                    View on GitHub
                </a>

            </div>
            <div className='h-full w-3/5 flex flex-col items-center justify-center p-10'>
                <img src={buckeyeConnect} alt='buckeyeConnect' className='w-full h-full object-contain rounded-md' />
            </div>

        </div>
    )
}