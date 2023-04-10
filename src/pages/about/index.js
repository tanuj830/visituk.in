import React from 'react'
import Header2 from "../../components/Header2"
import Offerings from '@/components/Offerings'
const index = () => {
  return (
    <>
        <Header2/>
    <div className='xl:container'>
           <section className=' my-10 rounded-lg drop-shadow-lg shadow-gray-600 px-5 py-5 ' id='about-us'>
          <h1 className='font-bold text-2xl  uppercase ' >Who are we?</h1>
          <p className='text-justify mt-2 py-3  text-lg'>Welcome to <small className='text-xl font-semibold text-black'>visituttrakhand.in</small>, a leading travel company dedicated to creating unforgettable experiences for our clients. We specialize in designing personalized itineraries that cater to your unique travel interests and preferences.
            <br /><br />
            At <small className='text-xl font-semibold text-black'>visituttrakhand.in</small>, we understand that travel is more than just visiting new places; it's about immersing yourself in new cultures, connecting with people from around the world, and creating memories that will last a lifetime. That's why we take a personalized approach to every trip we plan, ensuring that every detail is tailored to your needs and desires.
            <br /><br />
            Our team of experienced travel consultants has a passion for exploring the world and a deep understanding of what it takes to create a truly exceptional travel experience. Whether you're looking for a romantic getaway, a family adventure, or a solo trip to explore new horizons, we've got you covered.
            <br /><br />
            {/* We work with a wide range of trusted partners, including airlines, hotels, and local tour operators, to ensure that you receive the highest quality service and accommodations throughout your journey. We also prioritize responsible and sustainable travel practices, working to minimize our impact on the environment and support local communities.
            <br /><br /> */}
            At <small className='text-xl font-semibold text-black'>visituttrakhand.in</small>, our goal is to exceed your expectations and help you create memories that will last a lifetime. Let us take care of the details so you can focus on making the most of your travels.</p>
        </section>
    </div>
    <Offerings/>
    </>
  )
}

export default index