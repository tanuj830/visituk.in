import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import data from "../../data/plans.json"
import {FiPhoneCall} from "react-icons/fi"
import {FcOnlineSupport} from "react-icons/fc"
import Link from 'next/link'
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
   plan.slug === slug ?   <div className=''>
   <section className='flex flex-col md:relative  text-white  xl:container bg-slate-800 p-4 md:p-12'>
     <h1 className='text-3xl font-semibold'>{plan.title}</h1>
     <div className='w-[50%] mt-1'><hr /></div>
     <div className='mt-4'>
     <small className=''>Duration <small className='font-semibold text-sm'>{plan.days} days + {plan.nights} nights </small></small>
     </div>
     <div>
     <small className=''>Total Person <small className='font-semibold text-sm'>{plan.persons}  </small></small>
     </div>
     <small className=''>Route{
        plan.via.map(v=>(
          <small className='font-semibold text-sm'>{" -> " + v}</small>
        ))
      }</small>
      <div className='overflow-hidden text-black md:absolute w-full border shadow-md rounded-lg md:top-10 md:w-[25%] md:right-56  top-0 right-0 bg-white mt-6 md:mt-0'>
        <img className='overflow-hidden' src={plan.img} alt="" />
          <div className='py-2 px-3'>
          <h2 className='text-xl text-justify font-semibold text-slate-600'>Book {plan.title}</h2>
       <div className=''>
       <small className=' text-slate-600'><strike> ₹ {plan.exPrice}</strike></small>
        <small className=' text-lg font-semibold text-green-700'>  <small>now at</small> ₹{plan.price}</small><br />
        {/* <small className=' text-lg font-semibold text-green-600'>  <small>You are saving</small> ₹{(plan.exPrice) - (plan.price)}</small> */}
       </div>
        <div className='flex flex-col justify-between mt-4 mb-4'>
        <Link href='tel:7668088539' className='bg-slate-200 px-3 py-2 mt-2 border rounded-md hover:bg-slate-300 flex items-center justify-center gap-2'><h2 className='text-xl'><FiPhoneCall/></h2><h2>Book on call</h2></Link>
        <button className='bg-slate-200 px-3 py-2 mt-2 border rounded-md hover:bg-slate-300 flex items-center justify-center gap-2'><h2 className='text-xl'><FcOnlineSupport/></h2><h2>Book Online</h2></button>
        </div>
          </div>
      </div>
   </section>
   <section className='xl:container p-6 w-full'>
      <div className='md:w-[50%] border p-5 rounded-lg'>
        <h3 className='text-2xl font-semibold text-slate-600 my-3'>About Tour</h3>
      <h6>{plan.disp}</h6>
      </div>
   </section>
 </div>:null
 }
           </>
           )):null
        }
      </>
  )
}
