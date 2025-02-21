import React from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div >
      <nav className=' flex items-center sm:justify-between justify-center pt-3 sm:pl-4 md:h-16 sm:h-28 md:py-6 lg:pl-16 md:pr-16 md:fixed bg-black top-0 w-full'>
        <div className='flex flex-shrink-0 items-center'>
          <h1 className=' text-3xl font-bold w-full text-center lg:w-96'>Mohammad Nayab Khan</h1>

        </div>
        <div className='md:flex hidden gap-x-5 '>
          <span className=' underline cursor-pointer text-lg decoration-white hover:text-blue-400 hover:decoration-blue-400 font-semibold'>
            <Link smooth={true} to="home">
              Home</Link></span>
          <span className=' underline cursor-pointer text-lg decoration-white hover:text-blue-400 hover:decoration-blue-400 font-semibold'>
            <Link smooth={true} to="skills"> Skills </Link> </span>
          <span className=' underline cursor-pointer text-lg decoration-white hover:text-blue-400 hover:decoration-blue-400 font-semibold'>
            <Link smooth={true} to="education">Education</Link></span>
          <span className=' underline cursor-pointer text-lg decoration-white hover:text-blue-400 hover:decoration-blue-400 font-semibold'>
            <Link smooth={true} to="contact">Contact</Link></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar