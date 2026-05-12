import React from 'react'
import { motion } from 'framer-motion'
import OhioState from '../assets/Ohio_State_Buckeyes_logo.svg.png'
import shek from '../assets/Untitled (51).png'
import kino from '../assets/kino logo.b6e558d722123dfa26e9.png'
import coachableFull from '../assets/full_Coachable_logo.png'
import coachableFullWhite from '../assets/full_coachable_white_logo.png'
import ohioStateDark from '../assets/ohio_state_buckeyes_logo_alternate_19736107.png'
import amazonBlack from '../assets/amazon_black.webp'
import amazonWhite from '../assets/amazon_white.png'

export default function Blurb({ darkMode }) {
  const items = [
    {
      title: 'Computer Science & Engineering',
      body: 'Entrepreneurship & Innovation Scholars',
      image: darkMode ? ohioStateDark : OhioState,
      alt: 'Ohio State',
      imageClassName: 'object-contain',
    },
    {
      title: 'Shek Solutions',
      body: 'My personal freelancing company for local businesses in Columbus, building static and full-stack websites at an affordable cost.',
      image: shek,
      alt: 'Shek',
      imageClassName: darkMode ? 'object-contain filter invert' : 'object-contain',
    },
    {
      title: 'Kino | Full-Stack Intern',
      body: 'Full-stack developer at Kino Fitness, improving platform performance, UI/UX, and scalability. Contributed to API integrations, deployment optimization, and an interactive analytics dashboard.',
      image: kino,
      alt: 'Kino',
      imageClassName: 'object-contain',
    },
    {
      title: 'Coachable | Founder & Developer',
      body: 'Founder and developer of Coachable, a digital playbook platform that helps coaches create, animate, organize, and share plays with their teams across 40+ sports.',
      image: darkMode ? coachableFullWhite : coachableFull,
      alt: 'Coachable',
      imageClassName: 'object-contain',
    },
    {
      title: 'Amazon | Software Engineering Intern',
      body: 'Shipped features in React and TypeScript across the full development lifecycle, including code reviews and stakeholder collaboration. Partnered with senior engineers to resolve front-end issues and improve reliability and user experience at scale.',
      image: darkMode ? amazonWhite : amazonBlack,
      alt: 'Amazon',
      imageClassName: 'object-contain',
    },
  ]

  return (
    <section className='w-full px-4 py-8 sm:px-6 lg:px-10 lg:py-14'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-5 lg:gap-6'>
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            className={`flex w-full items-center gap-4 border-b px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 lg:gap-8 lg:px-8 lg:py-6 ${darkMode ? 'border-white/10' : 'border-black/10'}`}
          >
            <div className='flex w-24 shrink-0 items-center justify-center sm:w-32 lg:w-40'>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`h-auto max-h-16 w-full sm:max-h-20 lg:max-h-24 ${item.imageClassName}`}
                />
              ) : (
                <div
                  className={`flex h-16 w-full max-w-[9rem] items-center justify-center rounded-2xl border px-4 font-vollkorn text-xl font-bold lowercase sm:h-20 sm:text-2xl ${darkMode ? 'border-white/15 text-white' : 'border-black/10 text-black'}`}
                >
                  {item.badge}
                </div>
              )}
            </div>

            <div className='min-w-0 flex-1'>
              <hr className='mb-3 w-12 border-gray-300 sm:w-16' />
              <p className={`text-xl font-vollkorn font-bold leading-tight sm:text-2xl lg:text-3xl ${darkMode ? 'text-white' : 'text-black'}`}>
                {item.title}
              </p>
              <p className={`mt-2 text-sm leading-6 sm:text-base sm:leading-7 ${darkMode ? 'text-white' : 'text-black'}`}>
                {item.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
