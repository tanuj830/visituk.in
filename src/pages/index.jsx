import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { RiWhatsappFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Navbar from '@/components/navbar'
import data from "../data/plans.json"
import { useEffect } from 'react'
import OffersCard from '@/components/HomeScreenComponents/OffersCard'
import { Carousel } from 'react-responsive-carousel'
import CardCrousel from '@/components/HomeScreenComponents/CardCrousel'
import Offerings from '@/components/Offerings'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import {MdOutlineTour, MdSecurity, MdOutlineCleanHands, MdOutlineEmojiTransportation} from 'react-icons/md'
import Hero1 from '@/components/herosection/Hero1';


const onChangeCollege = (e) => {
  console.log(e.target.value)
}
export default function Home({ data }) {

  const [showNumber,setShowNumber]=React.useState(false);


  useEffect(() => {
    console.log(data);
  }, [])
  return (
    <>
      <Head>
        <title>visituttrakhand.in</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main>
  {/* for pc */}
<div className=" hidden md:inline ">
          <div className='fixed  bottom-72  right-0  z-10 rounded-l-md drop-shadow-md bg-gray-100'>
          <ul className="p-1 font-bold text-lg">
            <a href="https:wa.link/prs44x" target="_blank" className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>} <RiWhatsappFill onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></a>
            <li className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>}<MdCall onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></li>
          </ul>
        </div>
      <div className='mx-2 md:mx-0 sm:container tracking-wider   bg-[rgba(0,0,0,0.2)] bg-no-repeat h-[100vh]'  style={{backgroundImage:"url(https://ui-assets-gc.thrillophilia.com/assets/homepage/homepage-banner-2696fc25d8bb0f563e9ff7ae22882ee67cea624e244dfb0bc74316db0ffdcfba.jpg)", backgroundBlendMode:"overlay"}}>
        <Header/>
        <div className=' flex items-center  justify-center mt-36 w-full'>
          <div className='flex items-center justify-center  w-full'>
            <div className=''>
              <h2 className='text-white font-semibold tracking-wider  text-lg md:text-5xl brightness-200'>Uttarakhand Tourism</h2>
              <h3 className='text-white font-semibold tracking-wider text-sm md:text-lg text-justify md:w-[70%] md:mt-4 brightness-200'>The Himalayan Mountains, Crisp Air, Sacred Temples, and Enthralling Adventure Call You to Uttarakhand</h3>

            </div>   </div>
      
        </div>
         {/* icon section */}
         <div className=' z-[100] flex justify-around  xl:container text-slate-200 mt-[40vh] w-full'>
          <div className='flex  items-center  gap-2'>
            <div className='text-5xl '><MdOutlineTour/></div>
            <div>
              <div><h6 className=' uppercase brightness-200 z-50  text-sm'>2000+</h6></div>
              <div><h6 className=' uppercase brightness-200 text-sm'>Successful Tour</h6></div>
            </div>
          </div>
          <div className='flex  items-center  gap-2'>
            <div className='text-5xl '><MdOutlineCleanHands/></div>
            <div>
              <div><h6 className=' uppercase brightness-200 text-sm'>5 Star</h6></div>
              <div><h6 className=' uppercase brightness-200 text-sm'>Cleanliness</h6></div>
            </div>
          </div>
          <div className='flex  items-center  gap-2'>
            <div className='text-5xl '><MdSecurity/></div>
            <div>
              {/* <div><h6 className=' uppercase brightness-200 text-sm'></h6></div> */}
              <div><h6 className=' uppercase brightness-200 text-sm'>Security</h6></div>
            </div>
          </div>
          <div className='flex  items-center  gap-2'>
            <div className='text-5xl '><MdOutlineEmojiTransportation/></div>
            <div>
              {/* <div><h6 className=' uppercase brightness-200 text-sm'></h6></div> */}
              <div><h6 className=' uppercase brightness-200 text-sm'>Transportation</h6></div>
            </div>
          </div>
        </div>
            </div>


          <Hero1 />


            {/* hero section */}
        <section className=' my-10 rounded-lg drop-shadow-lg shadow-gray-600 px-5 py-5 ' id='about-us'>
          <h1 className='font-bold text-2xl  uppercase brightness-200' >Who are we?</h1>
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

        {/*  group plans */}
        <div className='mt-10' id='plans'>
          <h1 className='text-2xl font-bold my-4 tracking-wide text-center'>GROUP PLANS</h1>
          <div className='overflow-hidden'>
          <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
            {
              data.plans.map((plan) => {
                return (plan.isgroupplan === true ? <OffersCard plan={plan} /> : null)
              })
            }
          </div>
          </div>
          {/* <div className='md:hidden mb-10'>
            <CardCrousel data={data} group={true} />
          </div> */}
        </div>

        
        <div className='mt-10'>
          <h1 className='text-2xl font-bold my-4 tracking-wide text-center'> GENERAL PLANS</h1>
          <div className='  overflow-hidden '>
           <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
           {data.plans.map((plan) => {
              return (plan.isgroupplan === false ?
                 <OffersCard plan={plan} />
                 
                 : null)
            })}
           </div>
          </div>
          {/* <div className='md:hidden mb-10'>
          <CardCrousel data={data} group={false} />
        </div> */}
        </div>
        <div id="services">
          {/* do not delete this */}
        </div>
</div>








        {/* for mobile */}
        <div className="inline md:hidden">
        <div className="fixed bottom-0  right-0  z-10 rounded-l-md drop-shadow-md bg-gray-100">
          <ul className="p-1 font-bold text-lg">
            <a href="https:wa.link/prs44x" target="_blank" className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>} <RiWhatsappFill onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></a>
            <li className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>}<MdCall onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></li>
          </ul>
        </div>
      <div className='   tracking-wider w-screen h-screen z-0   bg-[rgba(0,0,0,0.2)]'  style={{backgroundImage:"url(https://ui-assets-gc.thrillophilia.com/assets/homepage/homepage-banner-mobile-70b4c0f0dc4b38ca1a4870d7e5c756b4629568b74d8c052207fb8479738e0029.jpg)",backgroundSize:"cover" , backgroundBlendMode:"overlay"}}>
        <Header/>
       <div className='relative '>
       <div className='absolute z-10 px-[2rem] flex items-center  justify-center mt-24 w-full'>
          <div className='flex items-center justify-center  w-full'>
            <div className=''>
              <h2 className='text-white font-semibold tracking-wider  text-4xl '>Uttarakhand Tourism</h2>
              <h3 className='text-white  tracking-wider  text-lg text-justify md:w-[70%] md:mt-4'>The Himalayan Mountains, Crisp Air, Sacred Temples, and Enthralling Adventure Call You to Uttarakhand</h3>

            </div>   </div>
      
        </div>
       </div>
         {/* icon section */}
         <div className=' z-[100]  absolute bottom-6 grid grid-cols-2 md:grid-cols-4  gap-y-2 p-2   text-slate-200  w-full'>
          <div className='flex  items-center  '>
            <div className='text-5xl '><MdOutlineTour/></div>
            <div>
              <div><h6 className=' uppercase brightness-200 z-50  text-sm'>2000+</h6></div>
              <div><h6 className=' uppercase brightness-200 text-sm'>Successful Tour</h6></div>
            </div>
          </div>
          <div className='flex  items-center'>
            <div className='text-5xl '><MdOutlineCleanHands/></div>
            <div>
              <div><h6 className=' uppercase brightness-200 text-sm'>5 Star</h6></div>
              <div><h6 className=' uppercase brightness-200 text-sm'>Cleanliness</h6></div>
            </div>
          </div>
          <div className='flex  items-center'>
            <div className='text-5xl '><MdSecurity/></div>
            <div>
              {/* <div><h6 className=' uppercase brightness-200 text-sm'></h6></div> */}
              <div><h6 className=' uppercase brightness-200 text-sm'>Security</h6></div>
            </div>
          </div>
          <div className='flex  items-center'>
            <div className='text-5xl '><MdOutlineEmojiTransportation/></div>
            <div>
              {/* <div><h6 className=' uppercase brightness-200 text-sm'></h6></div> */}
              <div><h6 className=' uppercase  text-sm'>Transportation</h6></div>
            </div>
          </div>
        </div>
            </div>


          <Hero1/>


            {/* hero section */}
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

        {/*  group plans */}
        <div className='mt-10' id='plans'>
          <h1 className='text-2xl font-bold my-4 tracking-wide text-center'>GROUP PLANS</h1>
          <div className='overflow-hidden'>
          <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
            {
              data.plans.map((plan) => {
                return (plan.isgroupplan === true ? <OffersCard plan={plan} /> : null)
              })
            }
          </div>
          </div>
          {/* <div className='md:hidden mb-10'>
            <CardCrousel data={data} group={true} />
          </div> */}
        </div>

        
        <div className='mt-10'>
          <h1 className='text-2xl font-bold my-4 tracking-wide text-center'> GENERAL PLANS</h1>
          <div className='  overflow-hidden '>
           <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
           {data.plans.map((plan) => {
              return (plan.isgroupplan === false ?
                 <OffersCard plan={plan} />
                 
                 : null)
            })}
           </div>
          </div>
          {/* <div className='md:hidden mb-10'>
          <CardCrousel data={data} group={false} />
        </div> */}
        </div>
        <div id="services">
          {/* do not delete this */}
        </div>
        </div>
 
</main>
   </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { data }, // will be passed to the page component as props
  }
}