import Link from 'next/link';
import React from 'react'
import {FiExternalLink} from 'react-icons/fi'

export default function OffersCard({ plan }) {
    return (
                        <Link className='' href={`/details/${encodeURIComponent(plan.slug)}`}>
        <div className=' rounded-lg border bg-white'>
            <div className=''>
                <img className='h-fit w-fit' src="https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/16:9/pass/GettyImages-539105384.jpg" alt="" />
            </div>
            <div className='mx-5 my-3'>
                <div className='flex flex-row'>
                    <h1 className='text-2xl font-bold'>{plan.title}</h1>
                    <div className=' bg-[#d00000] px-2 py-1  ml-auto rounded-md text-white text-sm'>
                        6 days+5 nights
                    </div>
                </div>
                <div className='flex'>
                    <div className='font-semibold text-lg'>
                        <div><strike className="text-slate-400">₹ 23,000</strike></div>
                        <div>₹ 19,000</div>
                    </div>
                    
                </div>
                <h2>Exit: {plan.exit}</h2>
                <p>{plan.description.slice(0, 50) + "..."}</p>

            </div>
        </div>
                        </Link>
    )
}
