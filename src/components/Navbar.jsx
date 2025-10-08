import React from 'react'
import mylogo from '../assets/Untitled (52).png'

export default function Navbar() {
    
  return (
    <div className='h-18 bg-white w-full flex items-center justify-between px-40'>
          <img src={mylogo} alt='mylogo' className='w-10 h-10' />
          <div className='flex items-center gap-4 f'>
            <a href='#' className='font-vollkorn'>About</a>
            <a href='#' className='font-vollkorn text-[#E74C3C]'>Projects</a>
            <a href='#' className='font-vollkorn'>Skills</a>
            <a href='#' className='font-vollkorn'>Contact</a>
          </div>

        </div>
  )
}