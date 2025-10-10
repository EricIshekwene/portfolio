import './App.css'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Switch from './components/sub/Switch'
import Skills from './components/Skills'
import Github from './components/Github'
import Tcutss from './components/Tcutss'
import BuckeyeConnect from './components/BuckeyeConnect'
import Blurb from './components/Blurb'
import Joeys from './components/Joeys'
import Footer from './footer'

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const isLarge = useIsLarge();
  function useIsLarge() {
    const [isLarge, setIsLarge] = useState(window.innerWidth < 800);

    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth < 800);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isLarge;
  }

  return (
    <>
      {isLarge ? (
        <div className="mobile-overlay flex flex-col items-center justify-center h-screen bg-black text-white text-center px-6">
          <h1 className="text-2xl font-vollkorn">This portfolio isn’t optimized for mobile yet.</h1>
          <p className="text-lg mt-4 text-gray-300">Please view on a desktop device for the full experience.</p>
        </div>
      ) : (
        <div className={`h-full w-full flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <Navbar darkMode={darkMode} />
          <div id='main' className='mx-auto w-7/9'>
            <Switch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Header darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Blurb darkMode={darkMode} />
            <Tcutss darkMode={darkMode} />
            <BuckeyeConnect darkMode={darkMode} />
            <Joeys darkMode={darkMode} />
            <Github darkMode={darkMode} />
          </div>
          <Footer darkMode={darkMode} />
        </div>
      )}
    </>
  )
}

export default App
