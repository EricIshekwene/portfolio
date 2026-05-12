import React, { useEffect, useState } from 'react'
import mylogo from '../assets/Untitled (52).png'

export default function Navbar({ darkMode }) {
  const [t, setT] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const v = Math.min(1, window.scrollY / 300)
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
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isTransparent ? 'shadow-none backdrop-blur-0' : 'shadow-md backdrop-blur-md'} 
        ${darkMode ? 'text-white' : 'text-black'}
        ${isLarge ? 'px-16 py-2' : 'px-4 py-2'}`}
      style={{
        backgroundColor: darkMode
          ? `rgba(17, 24, 39, ${bgOpacity})` // gray-900
          : `rgba(255, 255, 255, ${bgOpacity})`
      }}
    >
      {isLarge ? (
        <div className='flex items-center justify-between'>
          <img
            src={mylogo}
            alt='mylogo'
            className={`w-7 h-7 transition-all ${darkMode ? 'filter invert' : ''}`}
          />
          <div className='flex items-center gap-6 text-sm'>
            <a href='#top' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Home
            </a>
            <a href='#skills' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Skills
            </a>
            <a href='#projects' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Projects
            </a>
            <a href='#contact' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Contact
            </a>
          </div>
        </div>
      ) : (
        <div className='flex items-center w-full justify-evenly'>
          <img
            src={mylogo}
            alt='mylogo'
            className={`w-6 h-6 transition-all ${darkMode ? 'filter invert' : ''}`}
          />
          <div className='flex items-center gap-3 text-xs mr-2'>
            <a href='#top' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Home
            </a>
            <a href='#skills' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Skills
            </a>
            <a href='#projects' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Projects
            </a>
            <a href='#contact' className='font-vollkorn hover:text-[#3B82F6] transition-colors duration-200'>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
