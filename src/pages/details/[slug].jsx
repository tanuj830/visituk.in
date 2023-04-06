import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import data from "../../data/plans.json"

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
   <section className='flex flex-col md:relative  text-white text-justify xl:container bg-slate-800 p-12'>
     <h1 className='text-3xl font-semibold'>{plan.title}</h1>
     <div className='w-[50%] mt-1'><hr /></div>
     <div className='mt-4'>
     <small className=''>Duration <small className='font-semibold text-sm'>{plan.days} days + {plan.nights} nights </small></small>
     </div>
     <div>
     <small className=''>Total Person <small className='font-semibold text-sm'>{plan.persons}  </small></small>
     </div>
     <small className=''>Route {
        plan.via.map(v=>(
          <small className='font-semibold text-sm'>{" -> " + v}</small>
        ))
      }</small>
      <div className='text-black md:absolute p-5 w-full border shadow rounded-md md:top-20 md:w-[25%] md:right-56  top-0 right-0 bg-white mt-6 md:mt-0'>
        <h2 className='text-xl text-justify font-semibold text-slate-600'>Book {plan.title}</h2>
        <small className='mt-2 text-slate-600'><strike> ₹ {plan.exPrice}</strike></small>
        <small className='mt-2 text-lg text-green-700'>  <small>now at</small> ₹{plan.exPrice}</small>
        <div className='flex flex-col justify-between mt-4'>
        <button className='bg-slate-200 px-3 py-2 mt-2 border rounded-md hover:bg-slate-300'>Book on call</button>
        <button className='bg-slate-200 px-3 py-2 mt-2 border rounded-md hover:bg-slate-300'>Book Online</button>
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
