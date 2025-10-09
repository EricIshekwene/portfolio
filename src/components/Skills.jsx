import React from 'react'
import day_pick from '../assets/ChatGPT Image Oct 8, 2025, 09_07_00 AM.png'
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiReact, SiVite, SiTailwindcss, SiEjs, SiUnity, SiPostgresql, SiPassport, SiCloudinary, SiGithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
export default function Skills() {
    return (
        <div id='skills' className='h-120 w-full p-10 gap-10 flex flex-row bg-gray-100'>
            <div className="h-full w-2/5 flex flex-col items-center p-10">
                <p className="text-5xl font-vollkorn mb-8 self-start">Skills</p>

                <div className="flex flex-col gap-4 h-full w-full">

                    <div className="w-full gap-2 rounded-md flex flex-col items-start justify-start">
                        <p className="text-xl font-semibold text-left">Programming Languages</p>
                        <hr className='border-gray-300 w-1/3 border-1 mt-1' />
                        <div className='flex flex-row flex-wrap w-full justify-start gap-4'>
                            <IoLogoJavascript className='text-4xl' />
                            <TbSql className='text-4xl' />
                            <FaPython className='text-4xl' />
                            <FaJava className='text-4xl' />
                            <FaHtml5 className='text-4xl' />
                            <FaCss3Alt className='text-4xl' />
                        </div>
                    </div>

                    <div className="w-full gap-2 rounded-md flex flex-col items-start justify-start">
                        <p className="text-xl font-semibold text-left">Frameworks & Libraries</p>
                        <hr className='border-gray-300 w-1/3 border-1 mt-1' />
                        <div className='flex flex-row flex-wrap w-full justify-start gap-4'>
                            <SiReact className='text-4xl' />
                            <FaNodeJs className='text-4xl' />
                            <SiVite className='text-4xl' />
                            <SiTailwindcss className='text-4xl' />
                            <SiEjs className='text-4xl' />
                            <SiUnity className='text-4xl' />
                        </div>
                    </div>

                    <div className="w-full gap-2 rounded-md flex flex-col items-start justify-start">
                        <p className="text-xl font-semibold text-left">Tools & Technologies</p>
                        <hr className='border-gray-300 w-1/3 border-1 mt-1' />
                        <div className='flex flex-row flex-wrap w-full justify-start gap-4'>
                            <SiPostgresql className='text-3xl' />
                            <SiPassport className='text-3xl' />
                            <SiCloudinary className='text-3xl' />
                            <SiGithub className='text-3xl' />
                            <FaGitAlt className='text-3xl' />
                        </div>
                    </div>
                </div>
                <a
                    href="https://www.linkedin.com/in/ericishekwene/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start mt-5 flex flex-row items-center justify-center"
                >
                    <button className="flex items-center gap-2  border-1 border-blue-400 text-blue-400 font-vollkorn px-5 py-2 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <CiLinkedin className="text-2xl" />
                        <span className="text-lg font-semibold">See on LinkedIn</span>
                    </button>
                </a>
            </div>

            <div className='h-full w-3/5 flex items-center justify-center'>
                <img src={day_pick} alt='day_pick' className=' w-10/11  shadow-sm rounded-lg ' />
            </div>

        </div >
    )
}
