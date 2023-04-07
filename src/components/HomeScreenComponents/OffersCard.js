import Link from 'next/link';
import React from 'react'
import { BiTrip, BiTimeFive } from 'react-icons/bi'
import { BsStarHalf} from 'react-icons/bs'
import { AiTwotoneStar} from 'react-icons/ai'

export default function OffersCard({ plan }) {
    return (
        <>
            {
                plan !== undefined ? <Link className='bg-slate-100 hover:shadow-md rounded-xl overflow-hidden' href={`/details/${encodeURIComponent(plan.id)}`}>
                    {
                        plan.specialoffer === true ? <div className='relative '>
                            <div className='absolute top-0 right-0 bg-[gold] px-3 py-2 duration-100 ease-in-out'>
                                <small className='text-sm text-slate-600 font-semibold'>Special Offer</small>
                            </div>
                        </div> : null
                    }
                    <div className=' rounded-lg border '>
                        <div className='overflow-hidden'>
                            <img className='w-full hover:scale-110 duration-1000 ease-in-out' src={plan.img} alt="" />
                        </div>
                        <div className='px-6 py-4'>
                            <div className='flex flex-row'>
                                <h1 className='text-2xl font-bold'>{plan.title}</h1>
                            </div>
                            
                            <div className='mt-2'>
                                
                                <h3 className='flex items-center text-yellow-500 gap-1'><small className='text-lg font-semibold'>{plan.ratings}</small><small className='flex items-center text-lg'> <AiTwotoneStar /> <AiTwotoneStar />{" "}
                            <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf /></small></h3>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <h3 className='text-xl'><BiTimeFive /></h3>   <h3 className='tracking-tighter text-md'>{plan.days} days + {plan.nights} nights</h3>
                            </div>
                            <div className='flex items-center mt-1 gap-1 '><h3 className='text-xl '><BiTrip /></h3> <h3>{plan.via.slice(0, 26) + "..."}</h3></div>
                            <div className='flex mt-1'>
                                <div className=' flex items-center font-semibold text-lg gap-2'>
                                    <div><strike className="text-red-600 text-sm">₹{plan.exPrice}</strike></div>
                                    <div className='text-green-600'> ₹{plan.price}</div>
                                </div>

                            </div>
                            {/* <p>{plan.disp.slice(0, 200) + "..."}</p> */}
                            {/* <div className='w-full flex justify-center'>
                                <button className='bg-red-600 text-white font-semibold text-xl w-full rounded-md py-3'>View Details</button>
                            </div> */}
                        </div>
                    </div>
                </Link> : null
            }
        </>
    )
}
