import Head from 'next/head'
import React from 'react'
import Link from "next/link"
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
import Hero from '@/components/herosection/Hero';


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
      <div className='relative'>
      <div className='relative tracking-wider  bg-[rgba(0,0,0,0.3)] bg-no-repeat w-full h-[100vh] py-10'  style={{backgroundImage:"url(https://images.pexels.com/photos/16576911/pexels-photo-16576911.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundBlendMode:"overlay", backgroundSize:"100%,  100%", filter:"blur(3px)"}}>
        {/* <Header/> */}

            </div>
      <div className='absolute top-[10vw] px-10 text-white'>
        <div className='flex justify-center gap-x-10 items-center'>
        <div className='w-[34%] '>
          <h1 className='text-4xl font-bold'>Uttarakhand Stopover</h1>
          <h6 className='text-gray-300 text-lg mt-6'>Apply for a free stopover visa when you fly Saudia or Flynas and explore Saudi for up to 96 hours on your way to your final destination.</h6>
          <div className='mt-6'>

          <Link href="/#plans" className="px-6 hover:bg-bgcol py-2 border-2 rounded-full border-white">Book Now</Link>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2  gap-2'>
          <div className='w-64 rounded-lg  overflow-hidden'><img className='w-full h-full hover:scale-110' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div className='w-64 rounded-lg  overflow-hidden'><img className='w-full h-full hover:scale-110' src="https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
          <div className='w-64 rounded-lg  overflow-hidden'><img className='w-full h-full hover:scale-110' src="https://media.istockphoto.com/id/825268350/photo/hardiwar.jpg?b=1&s=612x612&w=0&k=20&c=s-sNfgZEZQCOChl9k-cPHPERCXES4SotumIK0kv9Avk="/></div>
          <div className='w-64 rounded-lg  overflow-hidden'><img className='w-full h-full hover:scale-110' src="https://media.istockphoto.com/id/825268350/photo/hardiwar.jpg?b=1&s=612x612&w=0&k=20&c=s-sNfgZEZQCOChl9k-cPHPERCXES4SotumIK0kv9Avk="/></div>
          </div>
        </div>
      </div>
      </div>


          <Hero />
          <Hero1 />
          <Hero2 />


        {/*  group plans */}
        <div className='mx-[10%] mt-24' id='plans'>
          <h1 className='text-3xl font-bold my-4 tracking-widest text-slate-800 text-center '>Tours & Packages</h1>
          <div className='flex items-center justify-center mt-2'>
            <div className=' mt-1 w-24 border-b-4 border-green-600 '><hr /></div>
            </div>
          <div className='overflow-hidden'>
          <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
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




        {/* for mobile */}
        <div className="inline md:hidden  ">
        <div className='relative'>
      <div className='relative tracking-wider object-cover    bg-[rgba(0,0,0,0.3)] bg-no-repeat w-full h-[50vh] py-10'  style={{backgroundImage:"url(https://images.unsplash.com/photo-1626621331169-5f34be280ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)", backgroundBlendMode:"overlay", backgroundSize:"100%,  100%", filter:"blur(2px)"}}>
        {/* <Header/> */}

            </div>
      <div className='absolute bottom-[-40vw] px-6 text-white '>
        <div className=''>
        <div className=''>
          <h1 className='text-3xl font-semibold'>Uttarakhand Stopover</h1>
          <h6 className='text-gray-300 text-lg mt-3'>If you are looking for Religous Yatra Package book your ticket now and experience comfortable, flexible, low budget tour and stay on demand.</h6>
          <div className='mt-6'>

          <Link href="/#plans" className="px-6 hover:bg-bgcol py-2 border-2 rounded-full border-white">Book Now</Link>
          </div>
        </div>
      
        </div>
      <div className='overflow-hidden'>
       <div className='flex flex-nowrap  overflow-scroll  gap-5 px-10  mt-10 '>
          <img className='w-full h-full hover:scale-110 transition-all rounded-2xl' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/>
          <img className='w-full h-full hover:scale-110 transition-all rounded-2xl' src="https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <img className='w-full h-full hover:scale-110 transition-all rounded-2xl' src="https://media.istockphoto.com/id/825268350/photo/hardiwar.jpg?b=1&s=612x612&w=0&k=20&c=s-sNfgZEZQCOChl9k-cPHPERCXES4SotumIK0kv9Avk="/>
          <img className='w-full h-full hover:scale-110 transition-all rounded-2xl' src="https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <img className='w-full h-full hover:scale-110 transition-all rounded-2xl' src="https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <img className='w-full h-full hover:scale-110 transition-all rounded-2xl' src="https://media.istockphoto.com/id/825268350/photo/hardiwar.jpg?b=1&s=612x612&w=0&k=20&c=s-sNfgZEZQCOChl9k-cPHPERCXES4SotumIK0kv9Avk="/>
          </div>
       </div>
      </div>
      </div>
      

          <div className='mt-[50%]'>
          <Hero />
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
          <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
            {
              data.plans.map((plan) => {
                return (plan.isgroupplan === true ? <OffersCard  plan={plan} key={plan.id}/> : null)
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