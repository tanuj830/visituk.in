import React from 'react'
import axios from 'axios'
import Navbar from '@/components/Header/Navbar'
import Link from 'next/link'

import { AiOutlineMail} from 'react-icons/ai'
import { FiPhoneCall} from 'react-icons/fi'
import Footer from '@/components/Footer/Footer'
const Contact = () => {
  
  const [data, setData] = React.useState({})

  const handleSubmit = (e) =>{
    e.preventDefault();

    // axios.post("https://api-po0u.onrender.com/contact", data).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  const handleChange = (e) =>{

    const name = e.target.name;
    const value = e.target.value;

    setData({...data, [name]:value})
  }
  
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center flex-col mt-10 mb-56'>
      <h3 className='text-3xl font-semibold'>Contact Us</h3>
      <small>We’d love to hear from you! Here’s how you can reach us.</small>

      <div className='flex items-center justify-center mt-3'>
      <div className=' p-2'>
                    <Link href="tel:7668088539" className='flex  items-center gap-1 hover:scale-110'><h3 className='text-xl'><FiPhoneCall/></h3><h3>CALL</h3></Link>
                  </div>or
                  <div className=' p-2'>
                    <Link href="mailto:artravellers98@gmail.com" className='flex items-center gap-1 hover:scale-110'><h3 className='text-xl'><AiOutlineMail/></h3><h3>MAIL</h3></Link>
                  </div>
      </div>

      <div className='bg-slate-100 w-full '>
      <h3 className='mt-5 text-center'>You can also submit your queries here</h3>
    <form className='flex items-center justify-center ' action="POST" onSubmit={handleSubmit}>
  
                      
                       <div className='w-full md:w-96 px-2'>
                       <h5 style={{marginTop:18}}>Name</h5>
                        <input className='border-2 w-full' style={{width:"100%", padding:10}} name="name" onChange={handleChange} type="text" placeholder='Example: John Doe'/>
                       

                      
                       <h5 style={{marginTop:18}}>E-mail</h5>
                      <input className='border-2 w-full' style={{width:"100%", padding:10}} name="email" onChange={handleChange} type="text" placeholder='+91 - xxxx xxxx xx'/>
                       
                       
                      
                        <h5 style={{marginTop:18}}>Any Queries?</h5>
                      <textarea className='border-2 w-full' rows={6} style={{width:"100%", padding:10}} name="query" onChange={handleChange} type="text" placeholder='Your Queries.....'/>
                       

                        <button className='border-2 px-3 py-1 border-slate-400 m-2 rounded-sm'>Submit</button>
                       </div>
                    </form>
      </div>
    </div>
    </>
  )
}

export default Contact