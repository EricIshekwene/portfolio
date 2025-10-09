import React from 'react'
import buckeyeConnect from '../assets/buckeye_connect.png'

export default function BuckeyeConnect() {
    return (
        <div className='h-150 w-full flex flex-row   items-center justify-center'>
            <div className='h-full w-3/5 flex flex-col gap-4 items-start justify-center pl-20 p-10'>
                <p className='text-5xl font-vollkorn text-black mb-2'>
                    Buckeye Connect
                </p>
                <p className='text-md text-gray-700 text-left font-work-sans  mb-4 '>
                    A full-stack web app built for Ohio State students to create and share personalized link profiles. Features secure authentication with Passport.js, Cloudinary-powered profile image uploads, and dynamic link management (add, edit, delete). Includes a password reset system with email verification and token-based security. Fully deployed on Render with a PostgreSQL backend, managing both frontend EJS templates and backend server logic.</p>
                <a
                    href="https://github.com/EricIshekwene/Buckeye-Connect.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent text-red-500 border-2 border-red-400 font-semibold font-work-sans rounded-full px-6 py-3 hover:bg-red-50 hover:text-red-700 hover:border-red-600 transition-all duration-300 shadow-md hover:shadow-red-200/40"
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