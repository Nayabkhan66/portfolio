import React from 'react'
import Nayabkhan from '../assets/Nayabkhan.jpg'
import { delay, motion } from "framer-motion"
const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})
const Me = () => {
  return (
    <div id="home" className='border-neutral-900 pb-4 lg:mb-3.5 pt-16'>
     <div className='flex  flex-wrap '>
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-start pl-10'>
        <motion.h1  variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-semibold tracking-tight lg:mt-16 lg:text-6xl mt-1 '>Hi, I'm a</motion.h1>
        <motion.span variants={container(0.2)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-emerald-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Java Full Stack Developer </motion.span>
        <motion.p variants={container(0.7)} initial="hidden" animate="visible" className='my-2 mr-6 max-w-xl py-6 font-light tracking-tighter text-xl'>I’m a passionate Java Full Stack Developer with a strong foundation in Java, Spring Boot, and React. As a recent graduate, I’m eager to apply my skills to build efficient, scalable web applications. I’m always looking to learn and grow, and I’m excited to contribute to real-world projects with clean, maintainable code.</motion.p>
        </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
           <div className='flex justify-center'>
                <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.3}} src={ Nayabkhan} alt="Nayab Khan"  height='500' width='500' className='rounded-e-3xl rounded-s-3xl' />
           </div>
        </div>
     </div>
    </div>
  )
}

export default Me