import React from 'react'
import TiltedCard from './sub/TitledCard'
import my_face from '../assets/my_face.jpg'
import ohio_state from '../assets/Ohio_State_Buckeyes_logo.svg.png'
import shek from '../assets/Untitled (51).png'
import kino from '../assets/kino logo.b6e558d722123dfa26e9.png'

export default function Header() {
    return (
        <div id='header' className='h-120 w-full border- border-green-500 flex items-center justify-start px-10 py-15 gap-20'>
            <div className='w-2/5 h-full flex items-center justify-center'>

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
                        <p className="tilted-card-demo-text border-2 border-white/20 bg-black/10 ml-5 mt-5  text-white font-bold font-vollkorn rounded-md px-4">
                            Eric Ishekwene
                        </p>
                    }
                />
            </div>
            <div className='w-3/5 h-full  px-10 py-7 gap-4 flex flex-col justify-center'>

                <p className='text-6xl  font-vollkorn'>Eric Ishekwene</p>
                <hr className='border-[#E74C3C] w-1/3 border-1' />
                <p className='text-3xl font-work-sans'>Full Stack Developer</p>
                <p className='text-3xl font-work-sans'>Columbus, OH</p>

                <p className='text-md font-work-sans'>Developer focused on creating scalable, user-driven web applications with React, Node.js, and PostgreSQL, combining clean design and functionality across freelance and Kino Vision projects.</p>

                <div className='flex flex-row gap-8 mt-2 items-center justify-start'>
                    <img src={ohio_state} alt='ohio_state' className='h-10 object-contain' />

                    <img src={shek} alt='shek' className='h-10 object-contain' />
                    <img src={kino} alt='kino' className='h-10 object-contain' />
                </div>

            </div>
        </div>
    )
}
