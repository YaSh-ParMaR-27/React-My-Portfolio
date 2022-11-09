import React from 'react'

import {AiOutlineSend} from 'react-icons/ai'

export default function ContactForm() {
    const stylForInp = 'p-2 mb-4 border-2 border-gray-400 rounded-xl bg-slate-50'
    const stylForLabel = 'text-sm relative top-2.5 left-5 -z-10'
  return (
    <>
        <form action="https://getform.io/f/f1f78160-56fd-4536-8734-cb1e8a23d15a" method='POST ' className='flex flex-col justify-center'>
            <label htmlFor="Fname" className={stylForLabel}><span className='bg-slate-100'> Name</span></label>
            <input type="text" id='Fname' name='name' placeholder='Write your name' className={stylForInp}/>

            <label htmlFor="Email" className={stylForLabel} ><span className='bg-slate-100'>Email</span></label>
            <input type="email" id='Email' name='email' placeholder='Write your email'  className={stylForInp}/>

            <label htmlFor="msg" className={stylForLabel}><span className='bg-slate-100'>Project</span></label>
            <textarea id='msg' name='message' placeholder='Write your Project' className={stylForInp} rows="5" >
            </textarea>

            <button className='flex bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2 w-2/4 text-sm sm:text-base sm:w-3/5 justify-center mt-4 hover:scale-105 duration-100 text-white'>Send Message <span className='ml-2 pt-1'><AiOutlineSend size={20}/></span></button>
        </form>
    </>
  )
}
