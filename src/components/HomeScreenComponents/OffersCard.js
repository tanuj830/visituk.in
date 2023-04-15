import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BiTrip, BiTimeFive } from 'react-icons/bi'
import { BsStarHalf } from 'react-icons/bs'
import { AiTwotoneStar } from 'react-icons/ai'
import { RiVipCrown2Fill } from 'react-icons/ri'
import { HiCurrencyRupee } from 'react-icons/hi'
import data from '../../data/plans.json'
import numberToINR from '@/utils/numberToINR';
export default function OffersCard({ plan }) {
    const [selectedCar, setSelectedCar] = useState("2");
    const [planPrice, setPlanPrice] = useState(plan?.price)
    useEffect(() => {
        const carData = data.vehicles.filter(v => v.persons === selectedCar);
        // console.log(carData[0],carData[0].pricePerDay*plan.days,"the selected car");
        setPlanPrice(carData[0].pricePerDay * plan.days)
    }, [selectedCar])
    return (
        <>
            {
                plan !== undefined ? <div className='border rounded-lg border-slate-300'>
                    {
                        plan.specialoffer === true ? <div className='relative '>
                            <div className='absolute top-0 right-0  px-3 py-2 duration-100 ease-in-out '>
                                <small className='text-3xl  text-yellow-400 font-semibold'><RiVipCrown2Fill /></small>
                            </div>
                        </div> : null
                    }
                    <div className=' rounded-lg overflow-hidden w-[300px] md:w-full '>
                        <div className='overflow-hidden h-56 '>
                            <img className='w-full hover:scale-110  duration-1000 ease-in-out' src={plan.img} alt="" />
                        </div>
                        <div className='md:px-6 p-2 md:py-4 pt-2'>
                            <div className='flex flex-row'>
                                <h1 className='text-xl font-bold'>{plan.title}</h1>
                            </div>

                            <div className=' mt-1 md:mt-2'>

                                <h3 className='flex items-center text-yellow-500 gap-2 ml-1'><small className='text-md font-semibold'>{plan.ratings}</small><small className='flex items-center text-md'> <AiTwotoneStar /> <AiTwotoneStar />{" "}
                                    <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf /></small></h3>
                            </div>
                            <div className='flex items-center gap-1 md:mt-1'>
                                <h3 className='text-lg'><BiTimeFive /></h3>   <h3 className='tracking-tighter text-sm'>{plan.days} days + {plan.nights} nights</h3>
                            </div>
                            {/* <div className=' items-center mt-1 gap-1 hidden md:visible'><h3 className='text-xl '><BiTrip /></h3> <h3>{plan.via.slice(0, 26) + "..."}</h3></div> */}
                            <div className='flex items-center mt-1 gap-1 md:hidden visible'><h3 className='text-lg '><BiTrip /></h3> <h3 className='text-sm'>{plan.via.slice(0, 35) + "..."}</h3></div>
                            <div className='flex flex-col md:my-1'>
                                <div className=' flex items-center font-semibold text-lg gap-2'>
                                    <h3><HiCurrencyRupee /></h3>
                                    <div><strike className="text-red-600 text-[12px]">₹{numberToINR(plan.exPrice)}</strike></div>
                                    <div className='text-green-600 text-lg font-bold'> ₹{numberToINR(planPrice)}</div>
                                </div>
                                    <div className='text-red-600 text-sm italic'>(Saving {Math.round(((plan.exPrice - planPrice) / plan.exPrice) * 100)}%)</div>
                            </div>

                            {
                                plan.specialoffer === true ? <div className='flex items-center justify-between mt-4'>
                                    <select onChange={e => setSelectedCar(e.target.value)} className='border-2 w-40  md:px-2  py-1 border-slate-200'>
                                        <option value={"2"}>Vehicle Options</option>
                                        {
                                            data.vehicles.map(vech => (
                                                <option key={vech.name} value={vech.persons}>{vech.name} (For {vech.persons} people)</option>
                                            ))
                                        }
                                    </select>
                                    <Link className=' ' href={`/details/${encodeURIComponent(plan.id)}`}>
                                        <button className='bg-red-600 text-white font-semibold text-sm w-full rounded-md py-2 px-3'>View Details</button>
                                    </Link>
                                </div> : <Link className=' ' href={`/details/${encodeURIComponent(plan.id)}`}>
                                    <button className='bg-red-600 text-white font-semibold text-sm w-full rounded-md py-2'>View Details</button>
                                </Link>
                            }
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}
