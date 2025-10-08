
import './App.css'
import Navbar from './components/Navbar'

import { useState } from 'react';
import Header from './components/Header'
import Switch from './components/sub/Switch'
import Skills from './components/Skills'
import Folder from './components/sub/folder'
import github1 from './assets/github1.png'
import github2 from './assets/github2.png'
import github3 from './assets/github3.png'
import { FaGithub } from 'react-icons/fa'
import Github from './components/Github'
import tcutss from './assets/tcutss.assets.png'
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className='h-full w-full bg-gray-100'>

        <Navbar />

        <div id='main' className='mx-auto w-7/9 '>

          <Switch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Header />


          <Skills />
          <div className='h-150 w-full flex flex-row   items-center justify-center'>
            <div className='h-full w-3/5 flex flex-col items-center justify-center p-10'>
              <img src={tcutss} alt='tcutss' className='w-full h-full object-contain rounded-md' />
            </div>
            <div className='h-full w-2/5 flex flex-col items-end justify-center p-10'>
              <p className='text-5xl font-vollkorn text-black mb-2'>
                Tcutss
              </p>
              <p className='text-md text-gray-700 text-right font-work-sans mb-8 leading-relaxed'>
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
        </div>
        <Github />
      </div>

    </>
  )
}

export default App
