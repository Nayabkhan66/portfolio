import React from 'react'
import Trivago from '../assets/Trivago.jpg'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div className=' mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
                <motion.img whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1,delay:1}} className='mb-6 ml-3 rounded' src={Trivago} height={350} width={350}/>
            </div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{x:100,opacity:0}} transition={{duration:0.5,delay:1}}  className='w-full max-w-xl lg:w-3/4 ml-10'>
            <h2 className='mb-2 font-semibold'>Trivago Website Clone</h2>
            <p className='mb-4t text-neutral-400'>I created a clone of the Trivago website using HTML and CSS to replicate its layout and design. This project improved my skills in front-end development, focusing on creating a user-friendly interface. It features a similar navigation bar and hotel listings, providing me with hands-on experience in layout design and styling.</p>
            <div  className='mt-4 text-white font-bold  underline decoration-white hover:decoration-blue-300 hover:text-blue-400'><a href="https://main--trivago-nayabkhan.netlify.app" target='_blank'> View Project</a></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects