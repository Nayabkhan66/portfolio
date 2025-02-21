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

        <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ x: 100, opacity: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="w-full ml-4 mr-2 lg:w-1/2 lg:mr-0 lg:ml-0"
>
  {/* Schooling Section */}
  <div className="border-2 border-white rounded-2xl p-6 w-full lg:w-96 mt-6 bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold text-white mb-3">School</h1>
    <h2 className="text-xl text-white mb-1">10th Grade</h2>
    <h3 className="text-gray-300">Institution: Tiny Tots Public School</h3>
    <h3 className="text-gray-300">Year of Completion: 2018</h3>
    <h3 className="text-gray-300">Percentage: 73%</h3>

    <h2 className="text-xl text-white mb-1 mt-4">12th Grade</h2>
    <h3 className="text-gray-300">Institution: Tiny Tots Public School</h3>
    <h3 className="text-gray-300">Year of Completion: 2020</h3>
    <h3 className="text-gray-300">Percentage: 61.6%</h3>
  </div>

  {/* Degree Section */}
  <div className="border-2 border-white rounded-2xl p-6 w-full lg:w-96 mt-6 bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold text-white mb-3">Degree</h1>
    <h3 className="text-white">Bachelor of Technology</h3>
    <h3 className="text-gray-300">Branch: Computer Science and Engineering</h3>
    <h3 className="text-gray-300">Institution: Kamla Nehru Institute of Physical and Social Sciences</h3>
    <h3 className="text-gray-300">Year of Completion: 2025</h3>
    <h3 className="text-gray-300">Current Percentage: 68%</h3>
  </div>

  {/* Additional Courses Section */}
  <div className="border-2 border-white rounded-2xl p-6 w-full lg:w-96 mt-6 bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold text-white mb-3">Additional Courses</h1>
    <h3 className="text-white">Java Full Stack Development</h3>
    <h3 className="text-gray-300">Institution: Jspiders BTM Layout, Bengaluru</h3>
  </div>
</motion.div>

      </div>
    </div>
  )
}

export default Education