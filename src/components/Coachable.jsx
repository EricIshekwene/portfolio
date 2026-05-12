import React from 'react'
import coachableVideo from '../assets/videos/Coachable_rugby_demo.mp4'

export default function Coachable({ darkMode }) {
  const description = 'Sports play designer built with React 19, Vite 7, and react-konva/Konva. I built a keyframe-based animation system with interpolation and RAF-driven playback, then updated canvas nodes imperatively so animation stays outside the React render loop. Includes timeline editing, recording mode, snapping, drawing tools, undo/redo, JSON serialization, and a Railway-hosted Postgres API for auth, playbooks, and prefab storage.'

  return (
    <section id='projects' className='w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-20'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-12'>
        <div className='w-full lg:w-[58%]'>
          <div className={`overflow-hidden rounded-3xl border shadow-2xl ${darkMode ? 'border-white/15 bg-[#111827]' : 'border-black/10 bg-[#f8f8f8]'}`}>
            <div className={`flex items-center gap-1.5 border-b px-3 py-2 sm:px-4 ${darkMode ? 'border-white/10 bg-[#1f2937]' : 'border-black/10 bg-[#ececec]'}`}>
              <span className='h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5' />
              <span className='h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5' />
              <span className='h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5' />
            </div>
            <div className='aspect-video w-full'>
              <video
                src={coachableVideo}
                autoPlay
                loop
                muted
                playsInline
                controls
                className='block h-full w-full rounded-b-3xl object-cover'
              />
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[42%]'>
          <div className='flex flex-col gap-4'>
            <p className={`text-3xl font-vollkorn sm:text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>
              Coachable
            </p>
            <p className={`text-base font-work-sans sm:text-lg lg:text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
              Founder | Full-Stack Developer
            </p>
            <p className={`text-sm leading-7 sm:text-base ${darkMode ? 'text-white' : 'text-black'}`}>
              {description}
            </p>
            <div className='pt-2'>
              <a
                href='https://coachableplays.com'
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center justify-center font-vollkorn font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${darkMode ? 'text-black bg-white hover:bg-black hover:text-yellow-400' : 'text-white bg-black hover:bg-[#3B82F6]'}`}
              >
                LIVE SITE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
