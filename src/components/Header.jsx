import React from 'react'
import { motion } from 'framer-motion'
import TiltedCard from './sub/TitledCard'
import my_face from '../assets/my_face.jpg'
import ohio_state from '../assets/Ohio_State_Buckeyes_logo.svg.png'
import shek from '../assets/Untitled (51).png'
import kino from '../assets/kino logo.b6e558d722123dfa26e9.png'
import ohio_state_dark from '../assets/ohio_state_buckeyes_logo_alternate_19736107.png'

export default function Header({ darkMode }) {
    return (
        <motion.div
            id='top'
            className=' w-full flex items-center justify-start px-10 py-15 gap-20'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >

            <motion.div
                className='w-2/5 h-full flex items-center justify-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <TiltedCard
                    imageSrc={my_face}
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Eric Ishekwene"
                    containerHeight="350px"
                    containerWidth="350px"
                    imageHeight="350px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p
                            className={`tilted-card-demo-text border-2 border-white/20 ${darkMode ? 'bg-black/10 text-white' : 'bg-white/10 text-black'
                                } ml-5 mt-5 font-bold font-vollkorn rounded-md px-4`}
                        >
                            Eric Ishekwene
                        </p>
                    }
                />
            </motion.div>


            <motion.div
                className='w-3/5 h-full px-10 py-7 gap-4 flex flex-col justify-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <p className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-vollkorn leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>
                    Eric Ishekwene
                </p>
                <hr className='border-gray-300 w-1/3 border-1' />
                <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-work-sans ${darkMode ? 'text-white' : 'text-black'}`}>
                    Full Stack Developer
                </p>
                <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-work-sans ${darkMode ? 'text-white' : 'text-black'}`}>
                    Columbus, OH
                </p>
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl font-work-sans w-11/12 md:w-4/5 leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>
                    Developer focused on creating scalable, user-driven web applications with React,
                    Node.js, and PostgreSQL, combining clean design and functionality across freelance
                    and Kino Vision projects.
                </p>

                <div className='flex flex-row gap-8 mt-2 items-center justify-start'>
                    {darkMode ? (
                        <img src={ohio_state_dark} alt='ohio_state' className='h-10 object-contain' />
                    ) : (
                        <img src={ohio_state} alt='ohio_state' className='h-10 object-contain' />
                    )}
                    <img
                        src={shek}
                        alt='shek'
                        className={`h-10 object-contain ${darkMode ? 'filter invert' : ''}`}
                    />
                    <img src={kino} alt='kino' className='h-10 object-contain' />
                </div>
            </motion.div>

        </motion.div>
    )
}
