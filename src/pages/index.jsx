import Head from 'next/head'
import Image from 'next/image'
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


const onChangeCollege = (e) => {
  console.log(e.target.value)
}
export default function Home({ data }) {
  useEffect(() => {
    console.log(data);
  }, [])
  return (
    <>
      <Head>
        <title>AR-Travels</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full  relative bg-black'>
        <img className='h-[150px] md:w-full md:h-full brightness-50' src="https://firebasestorage.googleapis.com/v0/b/artravells.appspot.com/o/4-dham-only.png?alt=media&token=c1f3fbe2-8195-4e81-b3f2-3ed8e9373145" alt="" />
        <div className='absolute px-10 md:px-0 top-1 md:top-[50%] w-full'>
          <div className='flex items-center justify-center  w-full'>
            <div className=''>
              <h2 className='text-white font-semibold tracking-wider text-lg md:text-5xl '>Uttarakhand Tourism</h2>
              <h3 className='text-white font-semibold tracking-wider text-sm md:text-lg text-justify md:w-[70%] md:mt-4'>The Himalayan Mountains, Crisp Air, Sacred Temples, and Enthralling Adventure Call You to Uttarakhand</h3>

            </div>   </div>
        </div>
      </div>
      <main className='mx-2 md:mx-0 sm:container tracking-wider'>
        <section className=' my-10 rounded-md px-3 py-5 bg-slate-50'>
          <h1 className='font-bold text-2xl text-justify uppercase'>Who are we?</h1>
          <p className='text-justify mt-2 py-3 text-lg'>Welcome to <small className='text-xl font-semibold text-black'>visituttrakhand.in</small>, a leading travel company dedicated to creating unforgettable experiences for our clients. We specialize in designing personalized itineraries that cater to your unique travel interests and preferences.
            <br /><br />
            At <small className='text-xl font-semibold text-black'>visituttrakhand.in</small>, we understand that travel is more than just visiting new places; it's about immersing yourself in new cultures, connecting with people from around the world, and creating memories that will last a lifetime. That's why we take a personalized approach to every trip we plan, ensuring that every detail is tailored to your needs and desires.
            <br /><br />
            Our team of experienced travel consultants has a passion for exploring the world and a deep understanding of what it takes to create a truly exceptional travel experience. Whether you're looking for a romantic getaway, a family adventure, or a solo trip to explore new horizons, we've got you covered.
            <br /><br />
            We work with a wide range of trusted partners, including airlines, hotels, and local tour operators, to ensure that you receive the highest quality service and accommodations throughout your journey. We also prioritize responsible and sustainable travel practices, working to minimize our impact on the environment and support local communities.
            <br /><br />
            At <small className='text-xl font-semibold text-black'>visituttrakhand.in</small>, our goal is to exceed your expectations and help you create memories that will last a lifetime. Let us take care of the details so you can focus on making the most of your travels.</p>
        </section>

        {/*  group plans */}
        <div className='mt-10'>
          <h1 className='text-2xl font-semibold my-4 tracking-wide text-center'>GROUP PLANS</h1>
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
          <h1 className='text-2xl font-semibold my-4 tracking-wide text-center'> GENERAL PLANS</h1>
          <div className='  overflow-hidden '>
           <div className='flex flex-nowrap md:py-3 md:grid md:grid-cols-4 md:overflow-hidden w-full gap-3  overflow-scroll'>
           {data.plans.map((plan) => {
              return (plan.isgroupplan === false ? <OffersCard plan={plan} /> : null)
            })}
           </div>
          </div>
          {/* <div className='md:hidden mb-10'>
          <CardCrousel data={data} group={false} />
        </div> */}
        </div>
        <Offerings/>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { data }, // will be passed to the page component as props
  }
}