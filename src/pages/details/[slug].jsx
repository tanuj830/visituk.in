import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../data/plans.json";
import { FiPhoneCall } from "react-icons/fi";
import { FcOnlineSupport } from "react-icons/fc";
import { AiTwotoneStar } from "react-icons/ai";
import { MdLocalConvenienceStore, MdEmojiTransportation } from "react-icons/md";
import { HiCurrencyRupee} from 'react-icons/hi'
import Header2 from "../../components/Header2"
import { BiTimeFive } from "react-icons/bi";
import { BsFillPersonFill, BsStarHalf } from "react-icons/bs";
import { BiTrip } from "react-icons/bi";
import { BsFillCarFrontFill} from "react-icons/bs";
import { MdUpdate } from "react-icons/md";
import Link from "next/link";
import numberToINR from '@/utils/numberToINR';

import OffersCard from "@/components/HomeScreenComponents/OffersCard";
export default function Slug() {
  const router = useRouter();
  const slug = router.query.slug;
  const[persons, setPersons] = React.useState(0)
  const[perPersonPrice, setPerPersonPrice] = React.useState(0)
  const[price, setPrice] = React.useState(0)

  // setting up total price and persons to state 
    // const handleChange=(e, p)=>{
    //   console.log(p)
    //   console.log(e.target.persons)
    // }

    // calculating price
  useEffect(() => {
    setPerPersonPrice(price/persons)
  })


  const [selectedCar, setSelectedCar] = useState("2");
  const [showPrice, setShowPrice] = useState(false);
  const [plan, setPlan] = useState({});
  
  const [planPrice, setPlanPrice] = useState(plan?.price)

useEffect(() => {
  
  data.plans.map((plan) => (
    plan.id == slug ? setPlan(plan) : null))
}, [slug])


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
    <Header2/>
      {plan !== "undefined"
        ? 
            <>
                <div className="bg-slate-100">
                  {
                    plan.specialoffer === true ? <div className=" py-1  w-full bg-green-600">
                      <h3 className="text-sm md:text-md text-white text-center uppercase px-2 md:p-2">Avail our Special Offer and make the best deal for you ! </h3>
                      </div>:<div className=" py-1  w-full bg-slate-600">
                      <h3 className="text-sm md:text-md text-white text-center uppercase px-2 md:p-2">You can customize this tour <small className="text-slate-200 text-md">by choosing number of peoples and vechile</small> </h3>
                      </div>
                  }
                  <section className="flex flex-col md:relative  text-white  bg-slate-800 md:py-10 py-3 ">
                    <div className="xl:container">
                      <div className="px-3 md:px-0">
                        <h1 className="text-3xl font-semibold">{plan.title}</h1>
                        <div className="w-[50%] leading-5">
                        <small className="text-[14px]  text-justify">
                          Embark on a divine adventure with <b>{plan.title}</b>, the
                          journey of a lifetime  that will lift your
                          spirit and lift your heart!
                        </small>
                        </div>
                        <div className="w-[50%] mt-1">
                          <hr />
                        </div>
                        <div className="mt-6">
                          <small className="flex items-center gap-1">
                            <h6 className="text-xl">
                              <BiTimeFive />
                            </h6>{" "}
                            <small className="font-semibold text-sm">
                              {plan.days} days + {plan.nights} nights{" "}
                            </small>
                          </small>
                        </div>
                        <div className="mt-2">
                          <small className="flex items-center gap-1">
                            <h6 className="text-xl">
                              <BsFillPersonFill />
                            </h6>{" "}
                            {
                              plan.specialoffer === true ? <small className="font-semibold text-sm">
                              Tour of {plan.persons} people
                            </small>: <div>
                              <small className="font-semibold text-sm">Tour of {
                                plan.persons > 0 ? plan.persons.map((per, index)=>(
                                  
                                  index == plan.persons.length-1 ? per: per + " or "
                                
                              )):null
                              } people <small className="text-green-400 text-sm">(Customizable)</small></small>
                            </div>
                            }
                            {
                              plan.specialoffer === true ? <small className="text-lg text-green-400">(₹{Math.round(plan.price / plan.persons)}/person)</small>:null
                            }
                          </small>
                        </div>
                        <small className="flex items-center gap-1 mt-2">
                          <h6 className="text-2xl">
                            <BiTrip />
                          </h6>
                          <small className="font-semibold text-sm md:w-[50%]">
                            {plan.via}
                          </small>
                        </small>
                        <h6 className="flex items-center  mt-2 gap-2 text-yellow-500">
                          <small className="text-lg">4.5</small>{" "}
                          <small className="flex items-center text-lg">
                            <AiTwotoneStar /> <AiTwotoneStar />{" "}
                            <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf />
                          </small>{" "}
                          <small className="text-sm text-violet-400">
                            ({plan.ratingsCount} ratings)
                          </small>
                        </h6>

                        <div className="flex items-center gap-1 mt-2">
                          <div>
                            <h6 className="text-2xl">
                              <MdUpdate />
                            </h6>
                          </div>
                          <div>
                            <h6>Last Updated 3/2023</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-3 md:mx-0 overflow-hidden text-black md:absolute  border shadow-md hover:shadow-lg rounded-lg md:top-10 md:w-[25%] md:right-56  top-0 right-0 bg-white mt-6 md:mt-0">
                      <img className="overflow-hidden h-44 w-full object-cover" src={plan.img} alt="" />
                      <div className="py-2 px-3">
                        <h2 className="text-lg font-semibold ">
                          Book {plan.title}
                        </h2>
                        {
                            showPrice === true ?  <div className='flex flex-col md:my-1'>
                            <div className=' flex items-center h-10 font-semibold text-lg gap-1'>
                                <h3><HiCurrencyRupee /></h3>
                                <div><strike className="text-red-600 text-[12px]">₹{numberToINR(plan.exPrice)}</strike></div>
                                <div className='text-green-600 text-lg font-bold'> ₹{numberToINR(planPrice)}</div>
                                <div className='text-red-600 text-sm italic'>(Saving {Math.round(((plan.exPrice - planPrice) / plan.exPrice) * 100)}%)</div>
                            </div>
                        </div>: <h3 className=' text-sm font-semibold tracking-wider h-10 leading-8'>Customize your package & get final calculation</h3>
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
                        <div className="flex flex-col justify-between mt-4 mb-4">
                          <Link
                            href="tel:7668088539"
                            className="bg-[#d00000] px-3 py-3 mt-2 border rounded-md hover:bg-[#ea0000] text-white flex items-center justify-center gap-2"
                          >
                            <h2 className="text-xl">
                              <FiPhoneCall />
                            </h2>
                            <h2 className="">Book on call</h2>
                          </Link>
                          {/* <button  className='bg-slate-200 px-3 py-2 mt-2 border rounded-md hover:bg-slate-300 flex items-center justify-center gap-2'><h2 className='text-xl'><FcOnlineSupport/></h2><h2>Book Online</h2></button> */}
                        </div>
                      </div>
                    </div>
                  </section>



                  <section className="   xl:container">
                   <div className="mt-20 bg-white border px-5 rounded-xl shadow tracking-widest md:px-20 md:py-10">
                    <div className="">
                      <h2 className="text-xl  uppercase font-semibold border-l-8 border-green-500 px-3  my-3">
                        This tour includes
                      </h2>
                    </div>
                    <div className=" flex items-center justify-around text-slate-700">
                      <div className="flex items-center gap-1 py-4 ">
                        <h1 className="text-2xl text-black">
                          <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/way_oo6dkw.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">
                          {plan.days} days and {plan.nights} nights{" "}
                        </h1>
                      </div>
                      <div className="flex items-center gap-1 py-4 ">
                        <h1 className="text-2xl text-black">
                            <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1683133634/ezgif-5-3d935309ed_exoaa8.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">Stay on Demand</h1>
                      </div>
                      <div className="flex items-center gap-1 py-4 ">
                        <h1 className="text-2xl text-black">
                          <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/car_ytnkq9.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">Experienced Driver</h1>
                      </div>
                      <div className="flex items-center gap-1 py-4 ">
                        <h1 className="text-2xl text-black">
                        <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1680946773/spray_ay4hv3.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">Clean & Sanitized Vechile</h1>
                      </div>
                    </div>
                   </div>
                  </section>

                  <section className="xl:container mt-10  w-full">
                    <div className="px-2 md:px-0">
                      <div className=" bg-white border px-5 rounded-xl shadow tracking-widest md:px-20 md:py-10">
                        <h3 className="text-xl  uppercase font-semibold border-l-8 border-green-500 px-3  my-3">
                          About Tour
                        </h3>
                        <div dangerouslySetInnerHTML={{__html:plan.disp}} className="text-lg text-justify text-slate-600"></div>
                      </div>
                    </div>
                  </section>
                  {/* Tour Itinerary */}
                  {
                    plan.itenary ? <section className="xl:container mt-6 p-3">
                    <div className="bg-white border px-5 rounded-xl shadow tracking-widest md:px-20 md:py-10">
                    <h2 className="text-xl  uppercase font-bold my-4 border-l-8 border-green-500 px-3">Tour Itinerary</h2>
                        <div dangerouslySetInnerHTML={{__html:plan.itenary}} className="text-lg  text-justify text-slate-700"></div>
                    </div>
                  </section>:null
                  }
                </div>
            
            </>:null

                }
      {/* other plans */}
      <section className="xl:container px-3 mt-6">
        <h1 className="text-xl text-center uppercase font-bold my-3">Popular packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
          {data.plans.map((plan) => (
           <>
           {
            plan.specialoffer === true ?  <Link href={`/details/${encodeURIComponent(plan.id)}`} className="border px-4 py-2 ">
            <div className="flex gap-6">
            <div><img className="w-16 h-16 rounded-full" src={plan.img} alt="" /></div>
            <div>
              <h2 className="font-semibold">{plan.title}</h2>
            <div className=' mt-1 md:mt-2'>
                            
                            <h3 className='flex items-center text-yellow-500 gap-2'><small className='text-md font-semibold'>{plan.ratings}</small><small className='flex items-center text-md'> <AiTwotoneStar /> <AiTwotoneStar />{" "}
                        <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf /></small></h3>
                        </div>
                        <div className="">
                      <small className=" text-red-600">
                        <strike className="text-[12px]">
                          {" "}
                          ₹ {plan.exPrice}
                        </strike>
                      </small>
                      <small className=" text-lg font-semibold text-green-700">
                        {" "}
                        <small>now at</small> ₹{plan.price}
                      </small><br />
                      {/* <small className=' text-lg font-semibold text-green-600'>  <small>You are saving</small> ₹{(plan.exPrice) - (plan.price)}</small> */}
                    </div>
            </div>
            </div><hr />
                      <small className="text-md text-justify">Now you can enjoy this tour only at <small className="font-bold text-green-600 text-lg">₹{Math.round(plan.price / plan.persons)}</small>/person</small>
        </Link>: null
           }
           </>
          ))}
        </div>
      </section>
    </>
  );
}




