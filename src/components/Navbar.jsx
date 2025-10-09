import React, { useEffect, useState } from 'react'
import mylogo from '../assets/Untitled (52).png'

export default function Navbar() {
  // t = 0 (opaque) → 1 (fully transparent)
  const [t, setT] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const v = Math.min(1, window.scrollY / 300) // adjust 300 to change fade distance
        setT(v)
        raf = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bgOpacity = 1 - t
  const isTransparent = bgOpacity < 0.02

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-40 py-4 transition-[background-color,box-shadow,backdrop-filter] duration-300
                  ${isTransparent ? 'shadow-none backdrop-blur-0' : 'shadow-md'}`}
      style={{ backgroundColor: `rgba(255,255,255,${bgOpacity})` }}
    >
      <div className='flex items-center justify-between'>
        <img src={mylogo} alt='mylogo' className='w-10 h-10' />
        <div className='flex items-center gap-4'>
          <a href='#' className='font-vollkorn'>About</a>
          <a href='#' className='font-vollkorn text-[#E74C3C]'>Projects</a>
          <a href='#' className='font-vollkorn'>Skills</a>
          <a href='#' className='font-vollkorn'>Contact</a>
        </div>
      </div>
    </div>
  )
}
