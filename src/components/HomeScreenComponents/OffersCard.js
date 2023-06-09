import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BiTrip, BiTimeFive } from 'react-icons/bi'
import { BsStarHalf, BsFillPersonFill } from 'react-icons/bs'
import { AiTwotoneStar } from 'react-icons/ai'
import { RiVipCrown2Fill } from 'react-icons/ri'
import { HiCurrencyRupee } from 'react-icons/hi'
import data from '../../data/plans.json'
import numberToINR from '@/utils/numberToINR';
export default function OffersCard({ plan }) {
    const [selectedCar, setSelectedCar] = useState("2");
    const [showPrice, setShowPrice] = useState(false);
    const [planPrice, setPlanPrice] = useState(plan?.price)
    useEffect(() => {
        const carData = data.vehicles.filter(v => v.persons === selectedCar);
        console.log(carData)
        // console.log(carData[0],carData[0].pricePerDay*plan.days,"the selected car");
        if(carData.length > 0)
        {
            setPlanPrice(carData[0].pricePerDay * plan.days)
            setShowPrice(true)
        }
    }, [selectedCar])
    return (
        <>
            {
                plan !== undefined ? <div  className='  rounded-lg border-slate-300 my-3 md:mx-2  duration-500'>
                    {/* {
                        plan.specialoffer === true ? <div className='relative '>
                            <div className='absolute top-0 right-0  px-3 py-2 duration-100 ease-in-out '>
                                <small className='text-3xl  text-yellow-400 font-semibold'><RiVipCrown2Fill /></small>
                            </div>
                        </div> : null
                    } */}
                    <div data-aos="zoom-in" className=' rounded-lg overflow-hidden w-[300px] md:w-full '>
                        <div className='overflow-hidden h-32 rounded-3xl mb-1'>
                            <img className='w-full h-[100%] object-cover hover:scale-[1.1]  duration-1000 ease-in-out' src={plan.img} alt="" />
                        </div>
                        <div className='  px-2'>
                            <div className='flex flex-row'>
                                <h1 className='text-md font-semibold h-12'>{plan.title}</h1>
                            </div>

                            <div className=' '>

                                <h3 className='flex items-center text-yellow-500 gap-2 ml-1'><small className='text-md font-semibold'>{plan.ratings}</small><small className='flex items-center text-md'> <AiTwotoneStar /> <AiTwotoneStar />{" "}
                                    <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf /></small></h3>
                            </div>
                            <div className='flex items-center gap-1 md:mt-1'>
                                <h3 className='text-md'><BiTimeFive /></h3>   <h3 className='tracking-wider text-sm '>{plan.days} days + {plan.nights} nights</h3>
                            </div>
                            {/* <div className=' items-center mt-1 gap-1 hidden md:visible'><h3 className='text-xl '><BiTrip /></h3> <h3>{plan.via.slice(0, 26) + "..."}</h3></div> */}
                            <div className='flex items-center  gap-1 md:hidden visible'><h3 className='text-md '><BiTrip /></h3> <h3 className='text-sm'>{plan.via.slice(0, 35) + "..."}</h3></div>
                           {
                            showPrice === true ?  <div className='flex flex-col md:my-1'>
                            <div className=' flex items-center h-9 font-semibold text-lg gap-1'>
                                <h3><HiCurrencyRupee /></h3>
                                <div><strike className="text-red-600 text-[12px]">₹{numberToINR(plan.exPrice)}</strike></div>
                                <div className='text-green-600 text-sm font-bol'> ₹{numberToINR(planPrice)}</div>
                                <div className='text-red-600 text-sm italic'>(Saving {Math.round(((plan.exPrice - planPrice) / plan.exPrice) * 100)}%)</div>
                            </div>
                        </div>: <h3 className=' text-xs  font-semibold tracking-wider h-10 pt-2'>Customize your package & get final calculation</h3>
                           }
                            <div className='w-full mt-2 '>
                                    <select onChange={e => setSelectedCar(e.target.value)} className='border-2 rounded-full w-full px-5 py-2 cursor-pointer '>
                                        <option value={"2"}>Select number of peoples</option>
                                        <option value={"4"}>2 - 4 (Dezire, Xylo)</option>
                                        <option value={"6"}>5 - 6 (Triber)</option>
                                        <option value={"8"}>7 - 8 (Innova, Bolero, Max)</option>
                                        <option value={"13"}>9 - 13 (Traveller)</option>
                                    </select>
                                </div> 
                                   <div className='mt-3'>
                                   <Link className=' ' 
                                   href={{
                                    pathname: `/details/${encodeURIComponent(plan.id)}`,
                                    query: {persons: selectedCar}, // the data
                                  }}
                                  >
                                        <button className='bg-red-600 text-white font-semibold text-sm w-full rounded-md py-2 px-3'>View Details</button>
                                    </Link>
                                   </div>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}
