import React from 'react'
import axios from 'axios'
import Header2 from '@/components/Header2'
import Link from 'next/link'
// require('dotenv').config();
// import dotenv from "dotenv"
// dotenv.config();
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import Footer from '@/components/Footer'
import { sendEmail } from '@/utils/sendMail'
const Contact = () => {

  const [data, setData] = React.useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if(!data.name || !data.email || !data.message){
      console.log("Enter complete data");
    }
    else{
    sendEmail("VisitUttrakhand", "visituttrakhand3@gmail.com", "VisitUttrakhand", "visituttrakhand3@gmail.com", `Hi Ashish, there is a new query`, `<div>Name :${data.name} Email: ${data.email} message:${data.message}</div>`)
    setData({})
    }
    
  }

  const handleChange = (e) => {

    const { name, value } = e.target;
    // const value = e.target.value;

    setData({ ...data, [name]: value })
  }

  return (
    <>
      <Header2 />
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 md:py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.761594969285!2d77.99881481509468!3d30.2723732817999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bca3fc0ccf3%3A0xd19900de8c24dbee!2sGraphic%20Era%20Hill%20University!5e0!3m2!1sen!2sin!4v1674049856652!5m2!1sen!2sin" style={{ filter: " grayscale(1) contrast(1.2) opacity(0.4);" }}></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p class="mt-1">Graphic Era University TBI, Dehradun</p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a href='mailto:visituttrakhand3@gmail.com' class="text-indigo-500 leading-relaxed">visituttrakhand3@gmail.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <a href='tel:8181813626' class="text-indigo-500 leading-relaxed">8181813626</a>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font uppercase">Any Queries</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Any queries or any feedback which help us to improve more is appreciated.</p>
            <div class="relative mb-4">
              <label htmlFor="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input onChange={handleChange} type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input onChange={handleChange} type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label htmlFor="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea onChange={handleChange} id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" spellcheck="false" data-ms-editor="true"></textarea>
            </div>
            <button onClick={handleSubmit} class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact