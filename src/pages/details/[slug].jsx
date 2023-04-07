import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import data from "../../data/plans.json"
import {FiPhoneCall} from "react-icons/fi"
import {FcOnlineSupport, } from "react-icons/fc"
import {AiTwotoneStar } from "react-icons/ai"
import {MdLocalConvenienceStore, MdEmojiTransportation} from "react-icons/md"
import {BiTimeFive} from "react-icons/bi"
import {BsFillPersonFill, BsStarHalf} from "react-icons/bs"
import {BiTrip} from "react-icons/bi"
import {MdUpdate} from "react-icons/md"
import Link from 'next/link'
import OffersCard from '@/components/HomeScreenComponents/OffersCard'
export default function Slug() {
  const router=useRouter();
  const slug = router.query.slug
  // const[data, setData] = React.useState()

  // useEffect(() => {
  //   setData(router.query.slug);
  // }, [])
  console.log(slug)
    return (
      <>
        {
          slug !== 'undefined' ?
          data.plans.map(plan=>(
            <>
 {
   plan.id == slug ?   <div className=''>
   <section className='flex flex-col md:relative  text-white  bg-slate-800 md:py-10 py-3 '>
    
   <div className='xl:container'>
   <div className='px-3 md:px-0'>
    <h1 className='text-3xl font-semibold'>{plan.title}</h1>
     <small className='text-lg mt-1 text-justify'>Embark on a divine adventure with {plan.title}, the journey of a lifetime <br /> that will lift your spirit and lift your heart!
</small>
     <div className='w-[50%] mt-1'><hr /></div>
     <div className='mt-6'>
     <small className='flex items-center gap-1'><h6 className='text-xl'><BiTimeFive/></h6> <small className='font-semibold text-sm'>{plan.days} days + {plan.nights} nights </small></small>
     </div>
     <div className='mt-2'>
     <small className='flex items-center gap-1'><h6 className='text-xl'><BsFillPersonFill/></h6> <small className='font-semibold text-sm'>Tour of {plan.persons}  people</small></small>
</div>
     <small className='flex items-center gap-1 mt-2'><h6 className='text-2xl'><BiTrip/></h6>
     <small className='font-semibold text-sm'>{plan.via}</small></small>
      <h6 className='flex items-center  mt-2 gap-2 text-yellow-500'><small className='text-lg'>4.5</small> <small className='flex items-center text-lg'><AiTwotoneStar/> <AiTwotoneStar/> <AiTwotoneStar/> <AiTwotoneStar/> <BsStarHalf/></small> <small className='text-sm text-violet-400'>(12,800 ratings)</small></h6>

      <div className='flex items-center gap-1 mt-2'>
        <div><h6 className='text-2xl'><MdUpdate/></h6></div>
        <div><h6>Last Updated 3/2023</h6></div>
      </div>
    </div>
   </div>

      <div className='mx-3 md:mx-0 overflow-hidden text-black md:absolute  border shadow-md hover:shadow-lg rounded-lg md:top-10 md:w-[25%] md:right-56  top-0 right-0 bg-white mt-6 md:mt-0'>
        <img className='overflow-hidden' src={plan.img} alt="" />
          <div className='py-2 px-3'>
          <h2 className='text-xl text-justify font-semibold text-slate-600'>Book {plan.title}</h2>
       <div className=''>
       <small className=' text-slate-600'><strike className="text-[12px]"> ₹ {plan.exPrice}</strike></small>
        <small className=' text-lg font-semibold text-green-700'>  <small>now at</small> ₹{plan.price}</small><br />
        {/* <small className=' text-lg font-semibold text-green-600'>  <small>You are saving</small> ₹{(plan.exPrice) - (plan.price)}</small> */}
       </div>
        <div className='flex flex-col justify-between mt-4 mb-4'>
        <Link href='tel:7668088539' className='bg-[#d00000] px-3 py-3 mt-2 border rounded-md hover:bg-[#ea0000] text-white flex items-center justify-center gap-2'><h2 className='text-xl'><FiPhoneCall/></h2><h2 className=''>Book on call</h2></Link>
        {/* <button  className='bg-slate-200 px-3 py-2 mt-2 border rounded-md hover:bg-slate-300 flex items-center justify-center gap-2'><h2 className='text-xl'><FcOnlineSupport/></h2><h2>Book Online</h2></button> */}
        </div>
          </div>
      </div>
   </section>
   <section className='xl:container mt-20  w-full'>
     <div className='p-3 md:p-6'>
      <div className='md:w-[70%] border p-5 rounded-lg'>
        <h3 className='text-2xl font-semibold  my-3'>About Tour</h3>
      <h6 className='text-lg text-justify'>{plan.disp}</h6>
      </div>
     </div>
   </section>

   <section className='mt-4 px-3  xl:container'>
    <div><h2 className='text-2xl font-semibold '>This tour includes:</h2></div>
    <div className='md:w-[50%] grid grid-cols-2 text-slate-700'>
        <div className='flex items-center gap-1 py-4 '>
          <h1 className='text-2xl text-black'><BiTrip/></h1><h1 className='text-lg'>{plan.days} days and {plan.nights} nights </h1>
        </div>
        <div className='flex items-center gap-1 py-4 '>
          <h1 className='text-2xl text-black'><MdLocalConvenienceStore/></h1><h1 className='text-lg'>Convenience</h1>
        </div>
        <div className='flex items-center gap-1 py-4 '>
          <h1 className='text-2xl text-black'><MdEmojiTransportation/></h1><h1  className='text-lg'>Vechile with driver</h1>
        </div>
    </div>
   </section>

   {/* Tour Itinerary */}
   <section className='xl:container mt-6 p-3'>

   </section>
 </div>:null
 }
           </>
           )):null
        }


        {/* other plans */}
        <section className='xl:container px-3 mt-6'>
          <h1 className='text-2xl font-semibold my-3'>Popular packages</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 w-full gap-4'>
              {
                data.plans.map(plan=>(
                  <OffersCard plan={plan}/>
                ))
              }
          </div>
        </section>
      </>
  )
}
