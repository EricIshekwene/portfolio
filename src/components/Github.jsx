import React from 'react'
import Folder from './sub/Folder'
import github1 from '../assets/github1.png'
import github2 from '../assets/github2.png'
import github3 from '../assets/github3.png'
import { FaGithub } from 'react-icons/fa'

export default function Github() {
  return (
    <div className="h-120 w-full p-10 gap-10 flex flex-row bg-gray-100 items-center justify-center">

      <div className="h-full w-3/5 flex flex-col items-center justify-center p-10">
        <Folder
          size={3}
          color="#808080"
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
        <p className="text-5xl font-vollkorn text-black mb-2">
          GitHub Projects
        </p>
        <p className="text-lg text-gray-700 font-work-sans mb-8">
          View all my work and open-source projects online.
        </p>
        <a
          href="https://github.com/EricIshekwene"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-black border-2 border-black hover:bg-[black] hover:text-white font-work-sans font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300"
        >
          EricIshekwene <FaGithub size={22} />
        </a>
      </div>
    </div>
  )
}