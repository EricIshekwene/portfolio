import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OhioState from '../assets/Ohio_State_Buckeyes_logo.svg.png'
import shek from '../assets/Untitled (51).png'
import kino from '../assets/kino logo.b6e558d722123dfa26e9.png'
import ohio_state_dark from '../assets/ohio_state_buckeyes_logo_alternate_19736107.png'

export default function Blurb({ darkMode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-200 lg:h-120 mb-40 lg:mb-20 w-full flex flex-row mt-20 items-center justify-center"
      >
        <div className="flex flex-col w-1/3 h-full">
          <div className="flex flex-col pl-0 pr-0 pt-0 lg:pl-20 lg:pr-20 lg:pt-10 h-4/7 justify-center items-center overflow-hidden">
            <img
              src={darkMode ? ohio_state_dark : OhioState}
              alt="Ohio State"
              className="object-contain h-full w-full"
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          </div>
          <div className="flex flex-col items-center justify-start p-0 lg:p-10 h-3/7">
            <hr className="border-gray-300 w-1/3 border-1 mt-1 mb-4 mx-auto" />
            <p
              className={`text-2xl lg:text-3xl font-vollkorn font-bold mb-4 mx-auto text-center ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Computer Science & Engineering
            </p>
            <p
              className={`text-sm lg:text-md font-work-sans mb-4 mx-auto text-center ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Entrepreneurship & Innovation Scholars
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 h-full">
          <div className="flex flex-col pl-0 pr-0 pt-0 lg:pl-20 lg:pr-20 lg:pt-10 h-4/7 justify-center items-center overflow-hidden">
            <img
              src={shek}
              alt="Shek"
              className={`object-contain h-full w-full ${
                darkMode ? 'filter invert' : ''
              }`}
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          </div>
          <div className="flex flex-col items-center justify-start p-0 lg:p-10 h-3/7">
            <hr className="border-gray-300 w-1/3 border-1 mt-1 mb-4 mx-auto" />
            <p
              className={`text-2xl lg:text-3xl font-vollkorn font-bold mb-4 mx-auto text-center ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Shek Solutions
            </p>
            <p
              className={`text-sm lg:text-md font-work-sans mb-4 mx-auto text-center ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              My personal freelancing company for local businesses in Columbus,
              building static and full-stack websites at an affordable cost.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 h-full">
          <div className="flex flex-col pl-0 pr-0 pt-0 lg:pl-20 lg:pr-20 lg:pt-10 h-4/7 justify-center items-center overflow-hidden">
            <img
              src={kino}
              alt="Kino"
              className="object-contain h-full w-full"
              style={{ maxHeight: '100%', maxWidth: '100%' ,minHeight: '100%', minWidth: '100%'}}
            />
          </div>
          <div className="flex flex-col items-center justify-start p-0 lg:p-10 h-3/7">
            <hr className="border-gray-300 w-1/3 border-1 mt-1 mb-4 mx-auto" />
            <p
              className={`text-2xl lg:text-3xl font-vollkorn font-bold mb-4 mx-auto text-center ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Kino | Full-Stack Intern
            </p>
            <p
              className={`text-sm lg:text-md font-work-sans mb-4 mx-auto text-center ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Full-stack developer at Kino Fitness, improving platform
              performance, UI/UX, and scalability. Contributed to API
              integrations, deployment optimization, and an interactive
              analytics dashboard.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
