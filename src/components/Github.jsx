import React, { useState, useEffect } from 'react'
import Folder from './sub/Folder'
import github1 from '../assets/github1.png'
import github2 from '../assets/github2.png'
import github3 from '../assets/github3.png'
import { FaGithub } from 'react-icons/fa'

export default function Github({ darkMode }) {
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
      {isLarge ? <div className={`h-120 w-full p-2 gap-10 flex flex-row   items-center justify-center`}>

        <div className="h-full w-3/5 flex flex-col items-center justify-center p-10">
          <Folder
            size={3}
            color={darkMode ? '#ffffff' : '#808080'}
            className="drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
            items={[
              <img
                src={github2}
                alt="GitHub Project 2"
                className="w-full h-full object-cover rounded-md"
              />,
              <img
                src={github3}
                alt="GitHub Project 3"
                className="w-full h-full object-cover rounded-md"
              />,
              <img
                src={github1}
                alt="GitHub Project 1"
                className="w-full h-full object-cover rounded-md"
              />
            ]}
          />
        </div>


        <div className="h-full w-2/5 flex flex-col items-start justify-center p-10 text-left">
          <p className={`text-5xl font-vollkorn text-black mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
            GitHub Projects
          </p>
          <p className={`text-lg text-gray-700 font-work-sans mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            View all my work and open-source projects online.
          </p>
          <a
            href="https://github.com/EricIshekwene"
            target="_blank"
            rel="noopener noreferrer"
            className={`
    flex items-center gap-3
    font-vollkorn font-semibold
    py-3 px-8 rounded-full
    transition-all duration-300
    shadow-md hover:shadow-xl hover:scale-105
    ${darkMode
                ? 'text-black bg-white hover:bg-[#3B82F6] hover:text-white'
                : 'text-white bg-black hover:bg-[#3B82F6]'}
  `}
          >
            <FaGithub size={22} />
            <span>View on GitHub</span>
          </a>
        </div>
      </div> :
        <div className={`h-120 w-full p-2 gap-10 flex flex-col  mt-20 items-center justify-center`}>

          <div className="h-full w-full flex flex-col items-center justify-center p-2">
            <Folder
              size={3}
              color={darkMode ? '#ffffff' : '#808080'}
              className="drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
              items={[
                <img
                  src={github2}
                  alt="GitHub Project 2"
                  className="w-full h-full object-cover rounded-md"
                />,
                <img
                  src={github3}
                  alt="GitHub Project 3"
                  className="w-full h-full object-cover rounded-md"
                />,
                <img
                  src={github1}
                  alt="GitHub Project 1"
                  className="w-full h-full object-cover rounded-md"
                />
              ]}
            />
          </div>


          <div className="h-full w-full flex flex-col items-start justify-center p-10 text-left">
            <p className={`text-3xl font-vollkorn text-black mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              GitHub Projects
            </p>
            <p className={`text-sm text-gray-700 font-work-sans mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
              View all my work and open-source projects online.
            </p>
            <a
              href="https://github.com/EricIshekwene"
              target="_blank"
              rel="noopener noreferrer"
              className={` flex items-center gap-3 font-vollkorn font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${darkMode ? 'text-black bg-white hover:bg-[#3B82F6] hover:text-white' : 'text-white bg-black hover:bg-[#3B82F6]'}`}
            >
              <FaGithub size={22} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>}
    </>
  )
}