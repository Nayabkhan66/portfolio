import React from 'react'
import { delay, motion } from "framer-motion"
import education from "../assets/education.jpg"

const Education = () => {
  return (
    <div id='education' className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'> Education</h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className=''>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className='lg:mb-6 lg:ml-6 rounded-2xl h-[328px] w-[427px] object-cover sm:mr-4 mt-20' 
              src={education}
            />
          </div>
        </div>

        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className='w-full ml-4 mr-2 lg:w-1/2 lg:mr-0 lg:ml-0'>
        <div className='border-2 border-white rounded-2xl pl-6 pb-6 w-96 mt-6 '>
          <h1 className='mt-5 text-2xl font-bold mb-3'>School</h1>
          <h2 className='mt-1 text-xl mb-1'>10th Grade</h2>
          <h3>Institution: Tiny Tots Public School </h3>
          <h3>Year of completion : 2018</h3>
          <h3>Percentage : 73%</h3>
          <h2 className='mt-1 text-xl mb-1'>12th Grade</h2>
          <h3>Institution: Tiny Tots Public School </h3>
          <h3>Year of completion : 2020</h3>
          <h3>Percentage : 61.6%</h3>
          </div>
          <div className='border-2 border-white rounded-2xl pl-6 pb-6 w-96 mt-6 '>
          <h1 className='mt-5 text-2xl font-bold mb-3'>Degree</h1>
          <h3>Bachelor of Technology</h3>
          <h3>Branch : Computer Science and Engineering</h3>
          <h3>Institution: Kamla Nehru Institue of Physical and Social Sciences</h3>
          <h3>Year of completion : 2025</h3>
          <h3>Current Percentage : 68%</h3>
          </div>
          <div className='border-2 border-white  rounded-2xl pl-6 pb-6 w-96 mt-6'>
          <h1 className='mt-5 text-2xl font-bold mb-3'>Additional Courses</h1>
          <h3>Java Full Stack Devolopment </h3>
          <h3>Institution : Jspiders Btm Layout,Bengaluru</h3>
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default Education