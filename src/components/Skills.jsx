import React from 'react'
import { motion } from 'framer-motion'
import { CiLinkedin } from 'react-icons/ci'
import dayPick from '../assets/ChatGPT Image Oct 8, 2025, 09_07_00 AM.png'
import dayPickDark from '../assets/ChatGPT Image Oct 8, 2025, 09_13_07 AM.png'

export default function Skills({ darkMode }) {
  const skillGroups = [
    {
      title: 'Programming Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C#', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      items: ['React', 'Node.js', 'Express', 'Vite', 'EJS', 'Unity', 'Tailwind CSS', 'Swift'],
    },
    {
      title: 'Technologies',
      items: ['PostgreSQL', 'AWS', 'REST', 'Passport.js (Auth)', 'Cloudinary', 'Git/GitHub', 'NumPy', 'Pandas'],
    },
    {
      title: 'Certificates',
      items: [
        'Data Analysis with Python (Google)',
        'Full Stack Web Development (Dr. Yu, Udemy)',
        'Python (Pierian Training, Udemy)',
      ],
    },
  ]

  const cardClassName = darkMode
    ? 'rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6'
    : 'rounded-3xl border border-black/10 bg-white/60 p-5 md:p-6'

  const chipClassName = darkMode
    ? 'rounded-full border border-white/15 px-3 py-1.5 text-sm font-work-sans text-white sm:text-base'
    : 'rounded-full border border-black/10 px-3 py-1.5 text-sm font-work-sans text-black sm:text-base'

  return (
    <section
      id='skills'
      className='w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-16'
    >
      <motion.div
        className='mx-auto flex w-full max-w-7xl flex-col gap-8'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className='flex flex-col gap-3'>
          <p className={`text-4xl font-vollkorn sm:text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>
            Skills
          </p>
          <p className={`max-w-2xl text-sm leading-7 sm:text-base ${darkMode ? 'text-white/80' : 'text-black/70'}`}>
            Languages, frameworks, infrastructure, and certifications across full-stack engineering and applied data work.
          </p>
        </div>

        <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12'>
          <div className={`${cardClassName} xl:col-span-7`}>
            <div className='mb-4'>
              <p className={`text-lg font-semibold sm:text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                {skillGroups[0].title}
              </p>
              <hr className='mt-1 w-16 border-gray-300' />
            </div>
            <div className='flex flex-wrap gap-2.5'>
              {skillGroups[0].items.map((item) => (
                <span key={item} className={chipClassName}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            key={darkMode ? 'dark' : 'light'}
            className={`${cardClassName} overflow-hidden md:row-span-2 xl:col-span-5`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <img
              src={darkMode ? dayPickDark : dayPick}
              alt='skills visual'
              className='block h-full max-h-[420px] w-full rounded-2xl object-cover'
            />
          </motion.div>

          <div className={`${cardClassName} xl:col-span-5`}>
            <div className='mb-4'>
              <p className={`text-lg font-semibold sm:text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                {skillGroups[1].title}
              </p>
              <hr className='mt-1 w-16 border-gray-300' />
            </div>
            <div className='flex flex-wrap gap-2.5'>
              {skillGroups[1].items.map((item) => (
                <span key={item} className={chipClassName}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`${cardClassName} xl:col-span-7`}>
            <div className='mb-4'>
              <p className={`text-lg font-semibold sm:text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                {skillGroups[2].title}
              </p>
              <hr className='mt-1 w-16 border-gray-300' />
            </div>
            <div className='flex flex-wrap gap-2.5'>
              {skillGroups[2].items.map((item) => (
                <span key={item} className={chipClassName}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`${cardClassName} xl:col-span-8`}>
            <div className='mb-4'>
              <p className={`text-lg font-semibold sm:text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                {skillGroups[3].title}
              </p>
              <hr className='mt-1 w-16 border-gray-300' />
            </div>
            <div className='flex flex-wrap gap-2.5'>
              {skillGroups[3].items.map((item) => (
                <span key={item} className={chipClassName}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`${cardClassName} flex flex-col justify-between gap-5 md:col-span-2 xl:col-span-12`}>
            <div className='flex flex-col gap-3'>
              <p className={`text-lg font-semibold sm:text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                Profiles
              </p>
              <hr className='w-16 border-gray-300' />
              <p className={`text-sm leading-7 sm:text-base ${darkMode ? 'text-white/80' : 'text-black/70'}`}>
                Full resume details, project history, and expanded experience live on LinkedIn.
              </p>
            </div>

            <a
              href='https://www.linkedin.com/in/ericishekwene/'
              target='_blank'
              rel='noopener noreferrer'
              className='self-start'
            >
              <button
                className={`flex items-center gap-3 rounded-full px-8 py-3 font-vollkorn font-semibold transition-all duration-300 shadow-md hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-white text-black hover:bg-[#3B82F6] hover:text-white' : 'bg-[#3B82F6] text-white hover:bg-black hover:text-[#3B82F6]'}`}
              >
                <CiLinkedin className='text-2xl' />
                <span className='text-base sm:text-lg'>See on LinkedIn</span>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
