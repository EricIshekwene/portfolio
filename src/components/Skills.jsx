import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import day_pick from '../assets/ChatGPT Image Oct 8, 2025, 09_07_00 AM.png'
import { IoLogoJavascript } from "react-icons/io";
import { TbSql } from "react-icons/tb";
import { FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiReact, SiVite, SiTailwindcss, SiEjs, SiUnity, SiPostgresql, SiPassport, SiCloudinary, SiGithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import day_pick_dark from '../assets/ChatGPT Image Oct 8, 2025, 09_13_07 AM.png'

export default function Skills({ darkMode }) {
    return (
        <motion.div
            id='skills'
            className='w-full flex flex-col md:flex-row items-center p-10 md:gap-10'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <motion.div
                className='w-full md:w-2/5 flex flex-col items-center md:items-start p-6 md:p-10'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className={`text-4xl sm:text-5xl font-vollkorn mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>Skills</p>

                <div className="flex flex-col gap-6 w-full">
                    <div className="w-full flex flex-col items-start">
                        <p className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Programming Languages</p>
                        <hr className='border-gray-300 w-1/3 border mt-1 mb-2' />
                        <div className='flex flex-wrap gap-4'>
                            <IoLogoJavascript className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <TbSql className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <FaPython className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <FaJava className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <FaHtml5 className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <FaCss3Alt className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start">
                        <p className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Frameworks & Libraries</p>
                        <hr className='border-gray-300 w-1/3 border mt-1 mb-2' />
                        <div className='flex flex-wrap gap-4'>
                            <SiReact className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <FaNodeJs className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <SiVite className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <SiTailwindcss className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <SiEjs className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                            <SiUnity className={`text-3xl sm:text-4xl ${darkMode ? 'text-white' : ''}`} />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start">
                        <p className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Tools & Technologies</p>
                        <hr className='border-gray-300 w-1/3 border mt-1 mb-2' />
                        <div className='flex flex-wrap gap-4'>
                            <SiPostgresql className={`text-2xl sm:text-3xl ${darkMode ? 'text-white' : ''}`} />
                            <SiPassport className={`text-2xl sm:text-3xl ${darkMode ? 'text-white' : ''}`} />
                            <SiCloudinary className={`text-2xl sm:text-3xl ${darkMode ? 'text-white' : ''}`} />
                            <SiGithub className={`text-2xl sm:text-3xl ${darkMode ? 'text-white' : ''}`} />
                            <FaGitAlt className={`text-2xl sm:text-3xl ${darkMode ? 'text-white' : ''}`} />
                        </div>
                    </div>
                </div>

                <a
                    href="https://www.linkedin.com/in/ericishekwene/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start mt-6 flex flex-row items-center justify-center"
                >
                    <button
                        className={`flex items-center gap-3 font-vollkorn font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${darkMode ? 'bg-white text-black hover:bg-[#3B82F6] hover:text-white' : 'bg-[#3B82F6] text-white hover:bg-black hover:text-[#3B82F6]'}`}
                    >
                        <CiLinkedin className="text-2xl" />
                        <span className="text-base sm:text-lg font-semibold">See on LinkedIn</span>
                    </button>
                </a>
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={darkMode ? 'dark' : 'light'}
                    className='w-full md:w-3/5 flex items-center justify-center mt-8 md:mt-0'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <img
                        src={darkMode ? day_pick_dark : day_pick}
                        alt='day_pick'
                        className='w-11/12 md:w-10/11 shadow-sm rounded-lg'
                    />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}
