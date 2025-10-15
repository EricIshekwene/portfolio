import React, { useState, useEffect } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer({ darkMode }) {
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
        <hr className={`border-gray-300  w-7/9 text-black border-1 ${darkMode ? 'text-white' : 'text-black'}`} />
        <div id='contact' className='mt-10 w-4/5 mx-auto flex flex-col items-center justify-center text-center'>
          <p className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-vollkorn text-black leading-snug ${darkMode ? 'text-white' : 'text-black'}`}>
            Interested in working with me? Feel free to{' '}
            <a
              href='mailto:ishekwene.1@osu.edu'
              className={`text-[#E74C3C] border-b-2 border-[#E74C3C]/10 hover:border-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
            >
              contact me!
            </a>
          </p>

          {isLarge ? <div className={`flex flex-row items-center justify-center gap-8 mt-8 text-3xl text-gray-700 ${darkMode ? 'text-white' : 'text-black'}`}>
            <a
              href='mailto:ishekwene.1@osu.edu'
              className={`hover:text-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
            >
              <MdOutlineEmail />
            </a>

            <a
              href='https://www.linkedin.com/in/ericIshekwene'
              target='_blank'
              rel='noopener noreferrer'
              className={`flex items-center gap-2 hover:text-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
            >
              <CiLinkedin />
              <p className='text-base font-work-sans'>@ericIshekwene</p>
            </a>

            <a
              href='https://github.com/EricIshekwene'
              target='_blank'
              rel='noopener noreferrer'
              className={`flex items-center gap-2 hover:text-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
            >
              <FaGithub />
              <p className='text-base font-work-sans'>@EricIshekwene</p>
            </a>
          </div>:
          <div className={`flex flex-col items-center justify-center gap-2 mt-8 text-2xl text-gray-700 ${darkMode ? 'text-white' : 'text-black'}`}>
          <a
            href='mailto:ishekwene.1@osu.edu'
            className={`hover:text-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
          >
            <MdOutlineEmail />
          </a>

          <a
            href='https://www.linkedin.com/in/ericIshekwene'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-2 hover:text-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
          >
            <CiLinkedin />
            <p className='text-base font-work-sans'>@ericIshekwene</p>
          </a>

          <a
            href='https://github.com/EricIshekwene'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-2 hover:text-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
          >
            <FaGithub />
            <p className='text-base font-work-sans'>@EricIshekwene</p>
          </a>
        </div>}
        </div>
        <div className={`h-24 w-full flex flex-col items-center justify-center text-black font-work-sans ${darkMode ? 'text-white' : 'text-black'}`}>
          <div className='flex gap-6 mb-2'>
            <a
              href='https://github.com/EricIshekwene'
              target='_blank'
              rel='noopener noreferrer'
              className={`hover:text-[#E74C3C] transition ${darkMode ? 'text-white' : 'text-black'}`}
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/ericishekwene/'
              target='_blank'
              rel='noopener noreferrer'
              className={`hover:text-[#E74C3C] transition ${darkMode ? 'text-white' : 'text-black'}`}
            >
              LinkedIn
            </a>
          </div>
          <p className={`text-sm text-black ${darkMode ? 'text-white' : 'text-black'}`}>
            © {new Date().getFullYear()} Eric Ishekwene. All rights reserved.
          </p>
        </div>
        </>

    )
}
