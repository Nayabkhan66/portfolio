import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around space-y-4 lg:space-y-0 lg:space-x-8 h-20">
    
    <div className="flex items-center space-x-3 text-white hover:text-gray-800">
      <FaGithub className="text-white text-4xl " />
      <a
        href="https://github.com/Nayabkhan66"
        className="text-white text-xl font-bold hover:text-gray-800 transition-colors duration-300"
      >
        Github
      </a>
    </div>
  
    <div className="flex items-center space-x-3 text-white hover:text-blue-700">
      <FaLinkedin className="text-white text-4xl" />
      <a
        href="https://www.linkedin.com/in/mohammad-nayab-khan-116617226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="text-white text-xl font-bold hover:text-blue-700 transition-colors duration-300"
      >
        LinkedIn
      </a>
    </div>
  
    {/* Instagram */}
    <div className="flex items-center space-x-3 text-white hover:text-pink-600">
      <FaInstagram className="text-white text-4xl" />
      <a
        href="https://www.instagram.com/nayabkhanpathan?igsh=ZG5hcGpncGRvcTVt"
        className="text-white text-xl font-bold hover:text-pink-600 transition-colors duration-300"
      >
        Instagram
      </a>
    </div>
  </div>
  
  
  )
}

export default Footer