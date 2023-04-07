import Link from 'next/link';
import React from 'react'
import {BiTrip, BiTimeFive} from 'react-icons/bi'

export default function OffersCard({ plan }) {
    return (
                        <Link className='hover:shadow-md rounded-xl overflow-hidden' href={`/details/${encodeURIComponent(plan.slug)}`}>
        <div className=' rounded-lg border bg-white'>
            <div className='overflow-hidden'>
                <img className='h-fit w-fit hover:scale-125 duration-1000 ease-in-out' src="https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/16:9/pass/GettyImages-539105384.jpg" alt="" />
            </div>
            <div className='px-6 py-4'>
                <div className='flex flex-row'>
                    <h1 className='text-2xl font-bold'>{plan.title}</h1>
                </div>
                    <div className='flex items-center gap-1 mt-1'>
                      <h3 className='text-xl'><BiTimeFive/></h3>   <h3 className='tracking-tighter text-md'>{plan.days} days + {plan.nights} nights</h3>
                    </div>
                <div className='flex items-center mt-1 gap-1 '><h3 className='text-xl '><BiTrip/></h3> <h3>{plan.via.slice(0,22) + "..."}</h3></div>
                <div className='flex'>
                    <div className=' flex items-center font-semibold text-lg gap-2'>
                        <div><strike className="text-red-400 text-sm">₹{plan.exPrice}</strike></div>
                        <div className='text-green-600'> ₹{plan.price}</div>
                    </div>
                    
                </div>
                <p>{plan.disp.slice(0, 50) + "..."}</p>

            </div>
        </div>
                        </Link>
    )
}
