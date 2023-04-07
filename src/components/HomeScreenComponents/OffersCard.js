import Link from 'next/link';
import React from 'react'
import { BiTrip, BiTimeFive } from 'react-icons/bi'

export default function OffersCard({ plan }) {
    return (
        <>
            {
                plan !== undefined ? <Link className='hover:shadow-md rounded-xl overflow-hidden' href={`/details/${encodeURIComponent(plan.id)}`}>
                    {
                        plan.specialoffer === true ? <div className='relative '>
                            <div className='absolute top-0 right-0 bg-[gold] px-3 py-2 duration-1000 ease-in-out'>
                                <small className='text-sm text-slate-600 font-semibold'>Special Offer</small>
                            </div>
                        </div> : null
                    }
                    <div className=' rounded-lg border bg-white'>
                        <div className='overflow-hidden'>
                            <img className='w-fit  min-h-96 h-fit hover:scale-110 duration-1000 ease-in-out' src={plan.img} alt="" />
                        </div>
                        <div className='px-6 py-4'>
                            <div className='flex flex-row'>
                                <h1 className='text-2xl font-bold'>{plan.title}</h1>
                            </div>
                            <div className='flex items-center gap-1 mt-2'>
                                <h3 className='text-xl'><BiTimeFive /></h3>   <h3 className='tracking-tighter text-md'>{plan.days} days + {plan.nights} nights</h3>
                            </div>
                            <div className='flex items-center mt-2 gap-1 '><h3 className='text-xl '><BiTrip /></h3> <h3>{plan.via.slice(0, 25) + "..."}</h3></div>
                            <div className='flex mt-2'>
                                <div className=' flex items-center font-semibold text-lg gap-2'>
                                    <div><strike className="text-red-600 text-sm">₹{plan.exPrice}</strike></div>
                                    <div className='text-green-600'> ₹{plan.price}</div>
                                </div>

                            </div>
                            <p className='mt-1'>{plan.disp.slice(0, 200) + "..."}</p>
                            <div className='w-full flex justify-center mt-2'>
                                <button className='bg-red-600 text-white font-semibold text-xl w-full rounded-md py-3'>View Details</button>
                            </div>
                        </div>
                    </div>
                </Link> : null
            }
        </>
    )
}
