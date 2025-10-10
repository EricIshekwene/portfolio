import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer({ darkMode }) {
    return (
        <>
        <hr className={`border-gray-300  w-7/9 text-black border-1 ${darkMode ? 'text-white' : 'text-black'}`} />
        <div id='contact' className='h-80 w-4/5 mx-auto flex flex-col items-center justify-center text-center'>
          <p className={`text-4xl md:text-5xl lg:text-6xl font-vollkorn text-black leading-snug ${darkMode ? 'text-white' : 'text-black'}`}>
            Interested in working with me? Feel free to{' '}
            <a
              href='mailto:ericishekwene@gmail.com'
              className={`text-[#E74C3C] border-b-2 border-[#E74C3C]/10 hover:border-[#E74C3C] transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
            >
              contact me!
            </a>
          </p>

          <div className={`flex flex-row items-center justify-center gap-8 mt-8 text-3xl text-gray-700 ${darkMode ? 'text-white' : 'text-black'}`}>
            <a
              href='mailto:ericishekwene@gmail.com'
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
          </div>
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
