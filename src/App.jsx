
import './App.css'
import Navbar from './components/Navbar'

import { useState } from 'react';
import Header from './components/Header'
import Switch from './components/sub/Switch'
import Skills from './components/Skills'

import Github from './components/Github'
import Tcutss from './components/Tcutss'
import BuckeyeConnect from './components/BuckeyeConnect'
import Blurb from './components/Blurb'
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className='h-full w-full flex flex-col items-center justify-center bg-gray-100'>

        <Navbar />

        <div id='main' className='mx-auto w-7/9 '>

          <Switch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Header />
          

          <Skills />
          <Blurb />
          <Tcutss />
          <BuckeyeConnect />
          <Github />
          
        </div>
        
        <hr className='border-gray-300  w-7/9 tex border-1' />
        <div className='h-150 w-full flex flex-row   items-center justify-center'>
         
        </div>
      </div>

    </>
  )
}

export default App
