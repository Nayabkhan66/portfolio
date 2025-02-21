import React, { useState } from 'react'
import { BsSendFill } from 'react-icons/bs';

const Contact = () => {

    const [Email, setEmail] = useState()
    const [Message, setMessage] = useState()

  return (
    <div id="contact" className='border-b border-neutral-900 pb-20 grid items-center justify-center'>
        <h1 className='my-10 text-center text-4xl'>Contact me </h1>
        <form className='grid w-52 mr-36 ml-10' action="https://api.web3forms.com/submit" method="POST" >
            <label className='mt-2 text-xl font-bold'>Email :</label>
            
            <input type="hidden" name="access_key" value="0deb0274-2b8c-4b84-8068-43d3aaf0a228"/>
            <input 
              className='mt-2 h-10 w-80 lg:w-96 rounded pl-2' 
              type="email" 
              placeholder='Enter your email'  
              name="email" // Add the name attribute
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label  className='mt-2 text-xl font-bold'>Your message :</label>
            <textarea 
              className='mt-2 rounded pl-2 pt-1 h-36' 
              type="text" 
              placeholder='Write here ...' 
              name="message" // Add the name attribute
              onChange={(e)=>{setMessage(e.target.value)}} 
            />
            <button className='mt-10 hover:scale-110 bg-white flex items-center justify-center text-xl p-2 w-fit lg:w-fit lg:pl-3 lg:text-xl text-bold text-blue-800 rounded-xl ml-32 lg:ml-40 font-semibold'>
              Send{"  "} <BsSendFill className=' ml-2 text-2xl' size={18}/>
            </button>
        </form>
    </div>
  )
}

export default Contact

