import React from 'react'
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiHibernate } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y :-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:'reverse'
        }
    }
})

const Technologies = () => {
  return (
    <div id="skills" className='border-b border-neutral-800 pb-24 '>
        <h1 className='my-20 text-center text-4xl'>Skills</h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:0.5,delay:0.7}} className='flex flex-wrap items-center justify-center gap-4 hover:'>

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4  border-neutral-800 p-4'>
             <ImHtmlFive className='text-7xl bg-[#E34F26] text-white p-4 rounded-2xl'/>
             </motion.div>

             <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaCss3Alt className='text-7xl bg-[#2965F1] text-[#FFFFFF] rounded-2xl' />
             </motion.div>

             <motion.div 
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             <SiTailwindcss className='text-7xl bg-[#06B6D4] text-[#FFFFFF] rounded-2xl'/>
             </motion.div>

             <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             <IoLogoJavascript className='text-7xl bg-[#F7DF1E] text-[#000000] rounded-2xl'/>
             </motion.div>

             <motion.div 
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             < SiMysql className='text-7xl bg-[#00758F] text-[#FFFFFF] rounded-2xl'/>
             </motion.div>

             <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaJava className='text-7xl bg-[#FF4F00] text-[#FFFFFF] rounded-2xl'/>
             </motion.div>

             <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             <SiHibernate className='text-7xl bg-[#96B14B] text-[#FFFFFF] rounded-2xl'/>
             </motion.div>

             <motion.div 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             <BiLogoSpringBoot className='text-7xl bg-[#6DB33F] text-[#FFFFFF] rounded-2xl'/>
             </motion.div>

             <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaReact className='text-7xl bg-[#FFFFFF] text-[#61DAFB] rounded-2xl'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies