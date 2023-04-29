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
import Hero2 from '@/components/herosection/Hero2';
import Hero3 from '@/components/herosection/Hero3';


const onChangeCollege = (e) => {
  console.log(e.target.value)
}
export default function Home({ data }) {

  const [showNumber,setShowNumber]=React.useState(false);


  // useEffect(() => {
  //   console.log(data);
  // }, [])
  return (
    <>
      <Head>
        <title>visituttrakhand.in</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main className=''>
  {/* for pc */}
<div className="hidden md:inline">
          {/* <div className='fixed  bottom-72  right-0  z-10 rounded-l-md drop-shadow-md bg-gray-100'>
          <ul className="p-1 font-bold text-lg">
            <a href="https:wa.link/prs44x" target="_blank" className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>} <RiWhatsappFill onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></a>
            <li className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>}<MdCall onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></li>
          </ul>
        </div> */}
        {/* change this  */}
      <div className=' tracking-wider   bg-[rgba(0,0,0,0.1)] bg-no-repeat w-full h-[100vh]'  style={{backgroundImage:"url(https://images.pexels.com/photos/14769110/pexels-photo-14769110.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundBlendMode:"overlay", backgroundSize:"100% 100%"}}>
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
          <Hero2 />


        {/*  group plans */}
        <div className='mx-[10%] mt-24' id='plans'>
          <h1 className='text-3xl font-bold my-4 tracking-widest text-slate-800 text-center '>Tours & Packages</h1>
          <div className='flex items-center justify-center mt-2'>
            <div className=' mt-1 w-24 border-b-4 border-green-600 '><hr /></div>
            </div>
          <div className='overflow-hidden'>
          <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-3 md:overflow-hidden w-full gap-3  overflow-scroll'>
            {
              data.plans.map((plan) => {
                return (plan.isgroupplan === true ? <OffersCard data-aos="fade-up" plan={plan} key={plan.id}/> : null)
              })
            }
          </div>
          </div>
          {/* <div className='md:hidden mb-10'>
            <CardCrousel data={data} group={true} />
          </div> */}
        </div>

        
        <div className='mx-[10%] '>
          <div className='flex items-center justify-center mt-2'>
            <div className=' mt-1 w-24 border-b-4 border-green-600 '><hr /></div>
            </div>
          <div className='  overflow-hidden '>
           <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-3 md:overflow-hidden w-full gap-3  overflow-scroll'>
           {data.plans.map((plan) => {
              return (plan.isgroupplan === false ?
                 <OffersCard key={plan.id} plan={plan} />
                 
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
      <div >
        <div className='tracking-wider  z-0   bg-[rgba(0,0,0,0.2)] bg-no-repeat w-full h-[100vh]'  style={{backgroundImage:"url(https://images.unsplash.com/photo-1626621331169-5f34be280ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)",backgroundSize:"cover" , backgroundBlendMode:"overlay"}}>
        <Header/>
       <div className='relative '>
       <div className='absolute z-10 px-[2rem] flex items-center  justify-center mt-24 w-full'>
          <div className='flex items-center justify-center  '>
            <div className=''>
              <h2 className='text-white font-semibold tracking-wider  text-4xl uppercase '>Uttarakhand Tourism</h2>
              <h3 className='text-white  tracking-wider  text-lg text-justify md:w-[70%] md:mt-4'>The Himalayan Mountains, Crisp Air, Sacred Temples, and Enthralling Adventure Call You to Uttarakhand</h3>

            </div>   </div>
      
        </div>
       </div>
        {/* icon section */}
        <div className=' z-[100]  absolute bottom-6 grid grid-cols-2 md:grid-cols-4  gap-y-2 p-2   text-slate-200  '>
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
        
            </div>


          <Hero1/>
          <Hero2/>

        {/*  group plans */}
        <div  className='mt-10 px-4 md:px-0' id='plans'>
              <h1 className='text-3xl font-bold my-4 tracking-wider text-slate-600 text-center'> Tour & Packages</h1>
          {/* <h1 className='text-3xl text-slate-600 font-bold my-4 tracking-wider text-center'>Group Plans</h1> */}
          <div className='flex items-center justify-center '>
            <div className=' w-24 border-b-4 border-green-600 '><hr /></div>
            </div>
          <div  className='overflow-hidden mt-4'>
          <div  className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
            {
              data.plans.map((plan) => {
                return (plan.isgroupplan === true ? <OffersCard  key={plan.id} plan={plan} /> : null)
              })
            }
          </div>
          </div>
          {/* <div className='md:hidden mb-10'>
            <CardCrousel data={data} group={true} />
          </div> */}
        </div>

        
        <div className='mt-10 px-4 md:px-0'>
          <div className='flex items-center justify-center mt-1'>
            <div className='  w-24 border-b-4 border-green-600 '><hr /></div>
            </div>
          <div className='  overflow-hidden mt-4 '>
           <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
           {data.plans.map((plan) => {
              return (plan.isgroupplan === false ?
                 <OffersCard key={plan.id} plan={plan} />
                 
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

        {/* <Offerings/> */}
        <Hero3/>
 
</main>
   </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { data }, // will be passed to the page component as props
  }
}